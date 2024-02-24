import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { StringNode } from '../../token/string/string-node';
import { TokenNode } from '../../token/token-node';

test('a', () => {
  const text = "'a'";
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe($Node.CHAR);
  expect(tree.text).toBe(text);
});
