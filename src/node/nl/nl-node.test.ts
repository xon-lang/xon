import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('line feed', () => {
  const text = '\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('carriage return', () => {
  const text = '\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('\r');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('cr lf', () => {
  const text = '\r\n';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('\r\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('lf cr', () => {
  const text = '\n\r';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(2);
  expect(tokens[0].text).toBe('\n');
  expect(tokens[0].type).toBe(NodeType.NL);
});

test('id', () => {
  const code = '\n';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.NL);
  expect(tokens[0].text).toBe('\n');
});
