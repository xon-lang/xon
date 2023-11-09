import { LexicalNode } from '~/parser/node/lexical-node';
import { LexicalAnalysis } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.body().statements[0].nodes as LexicalNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.COMMA);
  expect(tokens[0].text).toBe(',');
});
