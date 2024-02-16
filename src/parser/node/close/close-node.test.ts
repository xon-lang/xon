import { parse } from '../../../parser/parser';
import { $Node, TokenNode } from '../node';

test('close paren', () => {
  const text = ')';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.CLOSE);
  expect(nodes[0].text).toBe(')');
});
