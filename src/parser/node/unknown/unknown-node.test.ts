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
  // todo make all join unknown nodes
  const text = 'ºª¶';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes.map((x) => x.text).join('')).toBe('º');
});
