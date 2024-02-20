import { parseSyntax } from '../../syntax';
import { TokenNode } from '../node';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  expect(nodes.length).toBe(1);
  // expect(nodes[1].text).toBe('§');
  // expect(nodes[1].hidden.length).toBe(1);
  // expect(nodes[1].hidden[0].text).toBe(' ');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const context = parseSyntax(text);
  const nodes = context.statements.map((x) => x.item);

  expect(nodes.length).toBe(0);
  expect(context.issueManager.issues.length).toBe(3);
  expect(context.issueManager.issues.map((x) => (x.node as TokenNode).text).join('')).toBe('ºª¶');
});
