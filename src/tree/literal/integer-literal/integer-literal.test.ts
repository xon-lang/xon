import { parseLiteral } from '../../../parse';
import { IntegerLiteralTree } from './integer-literal.tree';

test('zero int number', () => {
  const code = '0';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.value).toBe(0);
});

test('positive int number', () => {
  const code = '2x01110';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.value).toBe(0b01110);
});
test('radix int', () => {
  const code = '16X1A_B_C';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.integer).toBe('1A_B_C');
  expect(tree.value).toBe(0x1abc);
});
