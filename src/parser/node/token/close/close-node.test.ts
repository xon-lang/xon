import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { TokenNode } from '../token-node';

test('close paren', () => {
  const text = ')';
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.CLOSE);
  expect(nodes[0].text).toBe(')');
});
