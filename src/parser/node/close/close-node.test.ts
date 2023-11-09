import { LexicalNode } from '~/parser/node/lexical-node';
import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('close paren', () => {
  const text = ')';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].nodes as LexicalNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(')');
});

test('close bracket', () => {
  const text = ']';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].nodes as LexicalNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(']');
});

test('close brace', () => {
  const text = '}';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].nodes as LexicalNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe('}');
});