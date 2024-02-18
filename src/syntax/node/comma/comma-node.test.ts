import { parseSyntax } from '../../syntax';
import { $Node, TokenNode } from '../node';

test('comma', () => {
  const text = ',';
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.COMMA);
  expect(nodes[0].text).toBe(',');
});
