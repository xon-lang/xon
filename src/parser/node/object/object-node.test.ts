import { Parser } from '~/parser/parser';
import { NodeType } from '../node-type';

test('empty object', () => {
  const text = '{}';
  const parser = new Parser(text);
  const nodes = parser.parse();
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT);
});
