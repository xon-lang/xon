import { parseLiteral } from '../../parse';
import { FloatLiteralNode } from './float-literal-node';

test('positive float number', () => {
  const code = '123.123';
  const node = parseLiteral<FloatLiteralNode>(code);
  expect(node).toBeInstanceOf(FloatLiteralNode);

  expect(node.value).toBe(123.123);
});

test('zero float number', () => {
  const code = '2x0.0';
  const node = parseLiteral<FloatLiteralNode>(code);
  expect(node).toBeInstanceOf(FloatLiteralNode);

  expect(node.value).toBe(0.0);
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const node = parseLiteral<FloatLiteralNode>(code);
  expect(node).toBeInstanceOf(FloatLiteralNode);

  expect(node.integer).toBe('5_999_245');
  expect(node.fraction).toBe('15463_64');
  expect(node.value).toBe(5999245.1546364);
});

test('radix float', () => {
  const code = '2x11.011001100110011001100110011001100110011001100110011';
  const node = parseLiteral<FloatLiteralNode>(code);
  expect(node).toBeInstanceOf(FloatLiteralNode);

  expect(node.radix).toBe(2);
  expect(node.integer).toBe('11');
  expect(node.fraction).toBe('011001100110011001100110011001100110011001100110011');
  expect(node.value).toBe(3.4);
});

test('16x123ABC_123.DDD12', () => {
  const code = '16x123ABC_123.DDD12';
  const node = parseLiteral<FloatLiteralNode>(code);
  expect(node).toBeInstanceOf(FloatLiteralNode);

  expect(node.radix).toBe(16);
  expect(node.integer).toBe('123ABC_123');
  expect(node.fraction).toBe('DDD12');
  // expect(node.value).toBe(3.4);
});
