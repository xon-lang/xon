import { parseLiteral } from '../../../parse';
import { IntegerLiteralTree } from './integer-literal.tree';

test('zero int number', () => {
  const code = '0';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.value).toBe(0);
});

test('positive int number', () => {
  const code = '2523';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.value).toBe(2523);
});
test('radix int', () => {
  const code = '16x1ABC';
  const tree = parseLiteral<IntegerLiteralTree>(code);
  expect(tree.value).toBe(0x1abc);
});
