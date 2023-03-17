import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('open paren', () => {
  const code = '(';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.OPEN);
  expect(tokens[0].text).toBe('(');
});

test('open bracket', () => {
  const code = '[';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.OPEN);
  expect(tokens[0].text).toBe('[');
});

test('open brace', () => {
  const code = '{';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.OPEN);
  expect(tokens[0].text).toBe('{');
});
