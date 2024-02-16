import { parse } from '../../../parser/parser';
import { $Node, TokenNode } from '../node';

test('comma', () => {
  const text = ',';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.COMMA);
  expect(nodes[0].text).toBe(',');
});
