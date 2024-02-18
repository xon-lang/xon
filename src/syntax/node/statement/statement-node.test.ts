import { parse } from '../../syntax';
import { $Node, TokenNode } from '../node';
import { StringNode } from '../string/string-node';

test('a', () => {
  const text = "'a'";
  const nodes = parse(text).statements.map((x) => x.item) as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe($Node.CHAR);
  expect(tree.text).toBe(text);
});
