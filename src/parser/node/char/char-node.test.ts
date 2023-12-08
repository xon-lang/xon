import { StringNode } from '../../../parser/node/string/string-node';
import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('a', () => {
  const text = '\'a\'';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe(NodeType.CHAR);
  expect(tree.text).toBe(text);
});
