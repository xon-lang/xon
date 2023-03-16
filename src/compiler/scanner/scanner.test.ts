import { Scanner } from '~/compiler/scanner/scanner';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(5);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);
  expect(tokens[1].text).toBe(' ');
  expect(tokens[1].type).toBe(NodeType.WHITESPACE);
  expect(tokens[2].text).toBe('edf_');
  expect(tokens[2].type).toBe(NodeType.ID);
  expect(tokens[3].text).toBe('    ');
  expect(tokens[3].type).toBe(NodeType.WHITESPACE);
  expect(tokens[4].text).toBe('_ghi1_23');
  expect(tokens[4].type).toBe(NodeType.ID);
});

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe("'abc   def'");
  expect(tokens[0].type).toBe(NodeType.STRING);
});

test('integer', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('123');
  expect(tokens[0].type).toBe(NodeType.INTEGER);
});

test('unexpected 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(4);
  expect(tokens[2].text).toBe('§•∞•');
});

test('unexpected 2', () => {
  const text = "'abc";
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe("'abc");
  expect(tokens[0].type).toBe(NodeType.UNKNOWN);
});

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('!');
  expect(tokens[0].type).toBe(NodeType.OPERATOR);
});

test('infix operator', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(3);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);

  expect(tokens[1].text).toBe('.');
  expect(tokens[1].type).toBe(NodeType.OPERATOR);

  expect(tokens[2].text).toBe('def');
  expect(tokens[2].type).toBe(NodeType.ID);
});


test('line feed', () => {
  const text = '\n';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('carriage return', () => {
  const text = '\r';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('\r');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('cr lf', () => {
  const text = '\r\n';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('\r\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(2);
  expect(tokens[0].text).toBe('\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('    ');
  expect(tokens[0].type).toBe(NodeType.WHITESPACE);
});

test('infix operator', () => {
  const text = 'infix +: (a: Number, b: Number) = Number';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  console.log(tokens.map((x) => x.stop).join(', '));

  expect(tokens.length).toBe(21);
  expect(tokens[0].type).toBe(NodeType.OPERATOR);
  expect(tokens[0].text).toBe('infix');
  expect(tokens[tokens.length - 1].type).toBe(NodeType.ID);
  expect(tokens[tokens.length - 1].text).toBe('Number');
});
