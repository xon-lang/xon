import { BodyNode } from '~/node/body/body-node';
import { NodeType } from '~/node/node';
import { parseNode } from '~/parser/parser';

test('single expression', () => {
  const code = '\n  a = 1';
  const tree = parseNode(code) as BodyNode;

  expect(tree.nodeType).toBe(NodeType.BODY);
  expect(tree.source.nodes.length).toBe(1);
});

test('multiple expression', () => {
  const code = '\n  x = 1\n  y = 2\n  z = 3';
  const tree = parseNode(code) as BodyNode;

  expect(tree.nodeType).toBe(NodeType.BODY);
  expect(tree.source.nodes.length).toBe(3);
});
