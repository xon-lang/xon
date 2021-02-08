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
  const code = '16X1ABC';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.value).toBe(0x1abc);
});
