import { StringNode } from '../../../parser/node/string/string-node';
import { parse } from '../../../parser/parser';
import { $Node, TokenNode } from '../node';

test('a', () => {
  const text = "'a'";
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe($Node.CHAR);
  expect(tree.text).toBe(text);
});
