import { Lexer } from '~/parser/lexer';
import { Source } from '~/source/source';

test('single id', () => {
  const text = 'abc';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].name.text).toBe('abc');
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(5);
  expect(tokens[0].name.text).toBe('abc');
  expect(tokens[1].name.text).toBe(' ');
  expect(tokens[2].name.text).toBe('edf_');
  expect(tokens[3].name.text).toBe('    ');
  expect(tokens[4].name.text).toBe('_ghi1_23');
});

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new Lexer(source);
  const tokens = lexer.getTokens();

  expect(tokens.length).toBe(1);
  expect(tokens[0].name.text).toBe("'abc   def'");
});
