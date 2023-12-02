import { DeclarationNode } from '~/parser/node/declaration/declaration-node';
import { IdNode } from '~/parser/node/id/id-node';
import { NodeType } from '~/parser/node/node-type';
import { parse } from '~/parser/parser';

test('a', () => {
  const text = 'model Abstract';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.DECLARATION);
  expect(tree.modifier?.text).toBe('model');
  expect((tree.assignee as IdNode)?.text).toBe('Abstract');
});
