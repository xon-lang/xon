import { parse } from '~/parser/parser';
import { TokenNode } from '../token-node';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  // expect(nodes[1].text).toBe('§');
  // expect(nodes[1].hidden.length).toBe(1);
  // expect(nodes[1].hidden[0].text).toBe(' ');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const context = parse(text);
  const nodes = context.root.children;

  expect(nodes.length).toBe(0);
  expect(context.issues.length).toBe(3);
  expect(context.issues.map((x) => (x.node as TokenNode).text).join('')).toBe('ºª¶');
});
