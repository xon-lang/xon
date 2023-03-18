import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.COMMA);
  expect(tokens[0].text).toBe(',');
});
