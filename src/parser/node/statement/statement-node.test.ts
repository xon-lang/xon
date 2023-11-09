import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { LexicalNode } from '../lexical-node';
import { NodeType } from '../node-type';

test('comma', () => {
  const code = '1';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const statements = scanner.body().statements;
  const nodes = statements[0].nodes as LexicalNode[];

  expect(statements.length).toBe(1);
  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.INTEGER);
  expect(nodes[0].text).toBe('1');
});