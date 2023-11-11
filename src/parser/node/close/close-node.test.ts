import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('close paren', () => {
  const text = ')';
  const source = Source.fromText(text);
  const scanner = new Parser(source.text);
  const tokens = scanner.parse()[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.CLOSE);
  expect(tokens[0].text).toBe(')');
});
