import { Lexer } from '~/parser/lexer';
import { Source } from '~/source/source';
import { TokenType } from '~/tree/expression/token/token-expression-tree';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].name.text).toBe('abc');
  expect(tokens[0].type).toBe(TokenType.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(5);
  expect(tokens[0].name.text).toBe('abc');
  expect(tokens[0].type).toBe(TokenType.ID);
  expect(tokens[1].name.text).toBe(' ');
  expect(tokens[1].type).toBe(TokenType.WHITESPACE);
  expect(tokens[2].name.text).toBe('edf_');
  expect(tokens[2].type).toBe(TokenType.ID);
  expect(tokens[3].name.text).toBe('    ');
  expect(tokens[3].type).toBe(TokenType.WHITESPACE);
  expect(tokens[4].name.text).toBe('_ghi1_23');
  expect(tokens[4].type).toBe(TokenType.ID);
});

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].name.text).toBe("'abc   def'");
  expect(tokens[0].type).toBe(TokenType.STRING);
});

test('integer', () => {
  const text = '123';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].name.text).toBe('123');
  expect(tokens[0].type).toBe(TokenType.INTEGER);
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
  expect(tokens[0].name.text).toBe("'abc");
  expect(tokens[0].type).toBe(TokenType.UNEXPECTED);
});

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].name.text).toBe('!');
  expect(tokens[0].type).toBe(TokenType.OPERATOR);
});

test('set start and stop indices', () => {
  const text = "¶•§  'abc''";
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source, 3, 9);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(2);
  expect(tokens[0].name.text).toBe('  ');
  expect(tokens[0].type).toBe(TokenType.WHITESPACE);
  expect(tokens[0].sourceSpan.start.index).toBe(3);
  expect(tokens[0].sourceSpan.stop.index).toBe(4);

  expect(tokens[1].name.text).toBe("'abc'");
  expect(tokens[1].type).toBe(TokenType.STRING);
  expect(tokens[1].sourceSpan.start.index).toBe(5);
  expect(tokens[1].sourceSpan.stop.index).toBe(9);
});

test('infix operator', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(3);
  expect(tokens[0].name.text).toBe('abc');
  expect(tokens[0].type).toBe(TokenType.ID);

  expect(tokens[1].name.text).toBe('.');
  expect(tokens[1].type).toBe(TokenType.OPERATOR);

  expect(tokens[2].name.text).toBe('def');
  expect(tokens[2].type).toBe(TokenType.ID);
});


test('line joining', () => {
  const text = 'abc\\  .def';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(3);
  expect(tokens[0].name.text).toBe('abc');
  expect(tokens[0].type).toBe(TokenType.ID);

  expect(tokens[1].name.text).toBe('.');
  expect(tokens[1].type).toBe(TokenType.OPERATOR);

  expect(tokens[2].name.text).toBe('def');
  expect(tokens[2].type).toBe(TokenType.ID);
});