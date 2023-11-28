import { ArrayAssignNode } from '~/parser/node/array-assign/array-assign-node';
import { IdNode } from '~/parser/node/id/id-node';
import { NodeType } from '~/parser/node/node-type';
import { parse } from '~/parser/parser';

test('a', () => {
  const text = '[a] = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as ArrayAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.ARRAY_ASSIGN);
  expect(tree.assignee.items.length).toBe(1);
  expect((tree.assignee.items[0] as IdNode).text).toBe('a');
});
