import { GroupNode } from '~/parser/node/group/group-node';
import { parse } from '~/parser/parser';
import { is } from '~/parser/util/is';
import { NodeType } from '../node-type';

test('empty closed', () => {
  const text = '()';
  const nodes = parse(text).root.children;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.GROUP)).toBe(true);
  expect(is(group.open, NodeType.OPEN)).toBe(true);
  expect(is(group.close, NodeType.CLOSE)).toBe(true);
  expect(group.items.length).toBe(0);
});
