import { DeclarationNode } from '~/parser/node/declaration/declaration-node';
import { IdNode } from '~/parser/node/id/id-node';
import { NodeType } from '~/parser/node/node-type';
import { parse } from '~/parser/parser';
import { is } from '~/parser/util/is';

test('model abstract', () => {
  const text = 'model Abstract';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.DECLARATION);
  expect(tree.modifier?.text).toBe('model');
  expect((tree.assignee as IdNode)?.text).toBe('Abstract');
});

test('abc attribute', () => {
  const text = `model Abstract: Base
    abc: String`;
  const nodes = parse(text).root.children;
  const tree = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.DECLARATION);
  expect(tree.modifier?.text).toBe('model');
  expect((tree.assignee as IdNode)?.text).toBe('Abstract');
  expect((tree.type?.value as IdNode).text).toBe('Base');
  expect(tree.attributes.length).toBe(1);
  expect(tree.attributes.every((x) => is(x, NodeType.ATTRIBUTE))).toBe(true);
});
