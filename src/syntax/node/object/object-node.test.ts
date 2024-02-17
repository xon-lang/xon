import { parse } from '../../syntax';
import { $Node } from '../node';

test('empty object', () => {
  const text = '{}';
  const nodes = parse(text).root.children;
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe($Node.OBJECT);
});
