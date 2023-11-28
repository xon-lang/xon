import { IdNode } from '~/parser/node/id/id-node';
import { NodeType } from '~/parser/node/node-type';
import { ObjectAssignNode } from '~/parser/node/object-assign/object-assign-node';
import { parse } from '~/parser/parser';

test('a', () => {
  const text = '{a} = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as ObjectAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT_ASSIGN);
  expect(tree.assignee.items.length).toBe(1);
  expect((tree.assignee.items[0] as IdNode).text).toBe('a');
});
