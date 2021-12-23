import { parseLiteral } from '../../util/parse';
import { IntegerLiteralNode } from './integer-literal-node';

test('zero int number', () => {
  const code = '0';
  const node = parseLiteral<IntegerLiteralNode>(code);
  expect(node).toBeInstanceOf(IntegerLiteralNode);

  expect(node.value).toBe(0);
});

test('positive int number', () => {
  const code = '2x01110';
  const node = parseLiteral<IntegerLiteralNode>(code);
  expect(node).toBeInstanceOf(IntegerLiteralNode);

  expect(node.value).toBe(0b01110);
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const node = parseLiteral<IntegerLiteralNode>(code);
  expect(node).toBeInstanceOf(IntegerLiteralNode);

  expect(node.integer).toBe('1a_b_c');
  expect(node.value).toBe(0x1abc);
});
