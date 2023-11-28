import { parse } from '~/parser/parser';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

test('infix modifier', () => {
  const text = 'infix';
  const context = parse(text);
  const nodes = context.root.children as TokenNode[];

  expect(context.issues.length).toBe(1);
  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.MODIFIER);
  expect(nodes[0].text).toBe('infix');
});
