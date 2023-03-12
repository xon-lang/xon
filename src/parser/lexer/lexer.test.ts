import { NodeType } from '~/node/node';
import { Lexer } from '~/parser/lexer/lexer';
import { Source } from '~/parser/lexer/source/source';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].nodeType).toBe(NodeType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(5);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].nodeType).toBe(NodeType.ID);
  expect(tokens[1].text).toBe(' ');
  expect(tokens[1].nodeType).toBe(NodeType.WHITESPACE);
  expect(tokens[2].text).toBe('edf_');
  expect(tokens[2].nodeType).toBe(NodeType.ID);
  expect(tokens[3].text).toBe('    ');
  expect(tokens[3].nodeType).toBe(NodeType.WHITESPACE);
  expect(tokens[4].text).toBe('_ghi1_23');
  expect(tokens[4].nodeType).toBe(NodeType.ID);
});

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe("'abc   def'");
  expect(tokens[0].nodeType).toBe(NodeType.STRING);
});

test('integer', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('123');
  expect(tokens[0].nodeType).toBe(NodeType.INTEGER);
});

test('unexpected 1', () => {
  const text = '123 §•∞•456';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(4);
});

test('unexpected 2', () => {
  const text = "'abc";
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe("'abc");
  expect(tokens[0].nodeType).toBe(NodeType.UNEXPECTED);
});

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('!');
  expect(tokens[0].nodeType).toBe(NodeType.OPERATOR);
});

test('set start and stop indices', () => {
  const text = "¶•§  'abc''";
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source, 3, 9);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(2);
  expect(tokens[0].text).toBe('  ');
  expect(tokens[0].nodeType).toBe(NodeType.WHITESPACE);
  expect(tokens[0].startIndex).toBe(3);
  expect(tokens[0].stopIndex).toBe(4);

  expect(tokens[1].text).toBe("'abc'");
  expect(tokens[1].nodeType).toBe(NodeType.STRING);
  expect(tokens[1].startIndex).toBe(5);
  expect(tokens[1].stopIndex).toBe(9);
});

test('infix operator', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(3);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].nodeType).toBe(NodeType.ID);

  expect(tokens[1].text).toBe('.');
  expect(tokens[1].nodeType).toBe(NodeType.OPERATOR);

  expect(tokens[2].text).toBe('def');
  expect(tokens[2].nodeType).toBe(NodeType.ID);
});

test('line joining', () => {
  const text = 'abc\\  .def';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(4);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].nodeType).toBe(NodeType.ID);

  expect(tokens[1].nodeType).toBe(NodeType.LINE_JOINING);

  expect(tokens[2].text).toBe('.');
  expect(tokens[2].nodeType).toBe(NodeType.OPERATOR);

  expect(tokens[3].text).toBe('def');
  expect(tokens[3].nodeType).toBe(NodeType.ID);
});
