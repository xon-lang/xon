import { PrefixNode } from '~/parser/node/prefix/prefix-node';
import { Parser } from '~/parser/parser';
import { evaluate } from '~/util/evaluate';
import { NodeType } from '../node-type';

test('negative integer', () => {
  const text = '-1';
  const parser = new Parser(text);
  const nodes = parser.parse();
  const node = nodes[0] as PrefixNode;

  expect(node.$).toBe(NodeType.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});
