import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';

test('empty object', () => {
  const text = '{}';
  const nodes = parseSyntax(text).statements.map((x) => x.item);
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe($Node.OBJECT);
});
