import { parseLiteral } from '../../parse';
import { FloatLiteralNode } from './float-literal-node';

test('positive float number', () => {
  const code = '123.123';
  const tree = parseLiteral<FloatLiteralNode>(code);
  expect(tree).toBeInstanceOf(FloatLiteralNode);

  expect(tree.value).toBe(123.123);
});

test('zero float number', () => {
  const code = '2x0.0';
  const tree = parseLiteral<FloatLiteralNode>(code);
  expect(tree).toBeInstanceOf(FloatLiteralNode);

  expect(tree.value).toBe(0.0);
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const tree = parseLiteral<FloatLiteralNode>(code);
  expect(tree).toBeInstanceOf(FloatLiteralNode);

  expect(tree.integer).toBe('5_999_245');
  expect(tree.fraction).toBe('15463_64');
  expect(tree.value).toBe(5999245.1546364);
});

test('radix float', () => {
  const code = '2x11.011001100110011001100110011001100110011001100110011';
  const tree = parseLiteral<FloatLiteralNode>(code);
  expect(tree).toBeInstanceOf(FloatLiteralNode);

  expect(tree.radix).toBe(2);
  expect(tree.integer).toBe('11');
  expect(tree.fraction).toBe('011001100110011001100110011001100110011001100110011');
  expect(tree.value).toBe(3.4);
});

test('16x123ABC_123.DDD12', () => {
  const code = '16x123ABC_123.DDD12';
  const tree = parseLiteral<FloatLiteralNode>(code);
  expect(tree).toBeInstanceOf(FloatLiteralNode);

  expect(tree.radix).toBe(16);
  expect(tree.integer).toBe('123ABC_123');
  expect(tree.fraction).toBe('DDD12');
  // expect(tree.value).toBe(3.4);
});
