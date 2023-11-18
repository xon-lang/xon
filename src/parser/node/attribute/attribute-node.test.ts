import { IdNode } from '~/parser/node/id/id-node';
import { ModelNode } from '~/parser/node/model/model-node';
import { NodeType } from '~/parser/node/node-type';
import { Parser } from '~/parser/parser';
import { is } from '~/parser/util/is';

test('abc attribute', () => {
  const text = `model Abstract: Base
    abc: String`;
  const parser = new Parser(text);
  const nodes = parser.parse();
  const tree = nodes[0] as ModelNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.MODEL);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.id?.text).toBe('Abstract');
  expect((tree.base?.value as IdNode).text).toBe('Base');
  expect(tree.children.length).toBe(1);
  expect(tree.children.every((x) => is(x, NodeType.ATTRIBUTE))).toBe(true);
});
