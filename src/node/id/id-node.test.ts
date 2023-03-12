import { NodeType } from '~/node/node';
import { parseNode } from '~/parser/parser';

test('id', () => {
  const code = 'myVariable';
  const tree = parseNode(code);

  expect(tree.nodeType).toBe(NodeType.ID);
  expect(tree.text).toBe('myVariable');
});
