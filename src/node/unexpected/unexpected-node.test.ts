import { NodeType } from '~/node/node';
import { parseNode } from '~/parser/parser';

test('id', () => {
  const code = 'ºª¶';
  const tree = parseNode(code);

  expect(tree.nodeType).toBe(NodeType.UNEXPECTED);
  expect(tree.text).toBe('ºª¶');
});
