import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { TokenNode } from '../token-node';

test('integer', () => {
  const text = '123';
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.INTEGER);
  expect(nodes[0].text).toBe('123');
});

test('zero int number', () => {
  const text = '0';
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.INTEGER);
  expect(nodes[0].text).toBe('0');
});

// test('positive int number', () => {
//   const text = '2x01110';
//   const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

//   expect(nodes.length).toBe(1);
//   expect(nodes[0].$).toBe($Node.INTEGER);
//   expect(nodes[0].text).toBe('2x01110');
// });

// test('radix int', () => {
//   const text = '16x1a_b_c';
//   const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];

//   expect(nodes.length).toBe(1);
//   expect(nodes[0].$).toBe($Node.INTEGER);
//   expect(nodes[0].text).toBe('16x1a_b_c');
// });
