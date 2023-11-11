import { PrefixNode } from '~/parser/node/prefix/prefix-node';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';
import { NodeType } from '../node-type';

test('negative integer', () => {
  const text = '-1';
  const source = Source.fromText(text);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes;
  const node = nodes[0] as PrefixNode;

  expect(node.$).toBe(NodeType.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});
