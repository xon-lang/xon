import { PrefixNode } from '../../../parser/node/prefix/prefix-node';
import { parse } from '../../../parser/parser';
import { evaluate } from '../../../util/evaluate';
import { NodeType } from '../node-type';

test('negative integer', () => {
  const text = '-1';
  const nodes = parse(text).root.children;
  const node = nodes[0] as PrefixNode;

  expect(node.$).toBe(NodeType.PREFIX);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});
