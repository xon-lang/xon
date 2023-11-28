import { IdAssignNode } from '~/parser/node/id-assign/id-assign-node';
import { IntegerNode } from '~/parser/node/integer/integer-node';
import { NodeType } from '~/parser/node/node-type';
import { parse } from '~/parser/parser';

test('a', () => {
  const text = 'a = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as IdAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.ID_ASSIGN);
  expect(tree.assign.$).toBe(NodeType.ASSIGN);
  expect((tree.assign.value as IntegerNode)?.text).toBe('1');
});
