import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Source } from '~/source/source';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const statements = scanner.body().statements;
  const nodes = statements[0].nodes as Token[];

  expect(statements.length).toBe(1);
  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.COMMA);
  expect(nodes[0].text).toBe(',');
});
