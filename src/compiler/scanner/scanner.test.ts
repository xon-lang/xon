import { Scanner } from '~/compiler/scanner/scanner';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(5);
  expect(source.nodeText(tokens[0])).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);
  expect(source.nodeText(tokens[1])).toBe(' ');
  expect(tokens[1].type).toBe(NodeType.WHITESPACE);
  expect(source.nodeText(tokens[2])).toBe('edf_');
  expect(tokens[2].type).toBe(NodeType.ID);
  expect(source.nodeText(tokens[3])).toBe('    ');
  expect(tokens[3].type).toBe(NodeType.WHITESPACE);
  expect(source.nodeText(tokens[4])).toBe('_ghi1_23');
  expect(tokens[4].type).toBe(NodeType.ID);
});

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe("'abc   def'");
  expect(tokens[0].type).toBe(NodeType.STRING);
});

test('integer', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('123');
  expect(tokens[0].type).toBe(NodeType.INTEGER);
});

test('unexpected 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(4);
});

test('unexpected 2', () => {
  const text = "'abc";
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe("'abc");
  expect(tokens[0].type).toBe(NodeType.UNEXPECTED);
});

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('!');
  expect(tokens[0].type).toBe(NodeType.OPERATOR);
});

test('set start and stop indices', () => {
  const text = "¶•§  'abc''";
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source, 3, 9);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(2);
  expect(source.nodeText(tokens[0])).toBe('  ');
  expect(tokens[0].type).toBe(NodeType.WHITESPACE);
  expect(tokens[0].start).toBe(3);
  expect(tokens[0].stop).toBe(4);

  expect(source.nodeText(tokens[1])).toBe("'abc'");
  expect(tokens[1].type).toBe(NodeType.STRING);
  expect(tokens[1].start).toBe(5);
  expect(tokens[1].stop).toBe(9);
});

test('infix operator', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(3);
  expect(source.nodeText(tokens[0])).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);

  expect(source.nodeText(tokens[1])).toBe('.');
  expect(tokens[1].type).toBe(NodeType.OPERATOR);

  expect(source.nodeText(tokens[2])).toBe('def');
  expect(tokens[2].type).toBe(NodeType.ID);
});

test('line joining', () => {
  const text = 'abc\\  .def';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(4);
  expect(source.nodeText(tokens[0])).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);

  expect(tokens[1].type).toBe(NodeType.JOINING);

  expect(source.nodeText(tokens[2])).toBe('.');
  expect(tokens[2].type).toBe(NodeType.OPERATOR);

  expect(source.nodeText(tokens[3])).toBe('def');
  expect(tokens[3].type).toBe(NodeType.ID);
});

test('line feed', () => {
  const text = '\n';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('carriage return', () => {
  const text = '\r';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('\r');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('cr lf', () => {
  const text = '\r\n';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('\r\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(2);
  expect(source.nodeText(tokens[0])).toBe('\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(source.nodeText(tokens[0])).toBe('    ');
  expect(tokens[0].type).toBe(NodeType.WHITESPACE);
});
