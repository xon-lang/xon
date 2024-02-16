import { parse } from '../../../parser/parser';
import { TokenNode } from '../node';
import { $Node } from '../node-type';

test('comma', () => {
  const text = ',';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.COMMA);
  expect(nodes[0].text).toBe(',');
});
