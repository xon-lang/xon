import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';
import { PrefixNode } from '../prefix/prefix-node';

test('infix modifier', () => {
  const text = 'infix';
  const ast = parse(text);
  const nodes = ast.root.children;
  const node = nodes[0] as PrefixNode;

  expect(nodes.length).toBe(1);
  expect(node.$).toBe(NodeType.PREFIX);
  expect(node.operator.text).toBe('infix');
  expect(node.value).toBe(null);
});

test('model string', () => {
  const text = 'model string';
  const ast = parse(text);
  const nodes = ast.root.children;
  const node = nodes[0] as PrefixNode;

  expect(nodes.length).toBe(1);
  expect(node.$).toBe(NodeType.PREFIX);
  expect(node.operator.text).toBe('model');
});
