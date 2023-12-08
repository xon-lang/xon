import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('if keyword', () => {
  const text = 'if';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.KEYWORD);
  expect(nodes[0].text).toBe('if');
});
