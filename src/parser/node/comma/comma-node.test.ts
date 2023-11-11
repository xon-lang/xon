import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const scanner = new Parser(source.text);
  const tokens = scanner.parse()[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.COMMA);
  expect(tokens[0].text).toBe(',');
});
