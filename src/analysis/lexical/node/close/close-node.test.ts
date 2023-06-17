import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Source } from '~/source/source';

test('close paren', () => {
  const text = ')';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].tokens as Token[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(')');
});

test('close bracket', () => {
  const text = ']';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].tokens as Token[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(']');
});

test('close brace', () => {
  const text = '}';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].tokens as Token[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe('}');
});
