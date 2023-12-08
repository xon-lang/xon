import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';

test('empty object', () => {
  const text = '{}';
  const nodes = parse(text).root.children;
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT);
});
