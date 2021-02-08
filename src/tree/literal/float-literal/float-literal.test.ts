import { parseLiteral } from '../../../parse';
import { FloatLiteralTree } from './float-literal.tree';

test('positive float number', () => {
  const code = '123.123';
  const tree = parseLiteral<FloatLiteralTree>(code);
  expect(tree.getValue()).toBe(123.123);
});

test('zero float number', () => {
  const code = '2X0.0';
  const tree = parseLiteral<FloatLiteralTree>(code);
  expect(tree.getValue()).toBe(0.0);
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const tree = parseLiteral<FloatLiteralTree>(code);
  expect(tree.getValue()).toBe(5999245.1546364);
});

test('radix float', () => {
  const code = '2x11.011001100110011001100110011001100110011001100110011';
  const tree = parseLiteral<FloatLiteralTree>(code);
  expect(tree.radix).toBe(2);
  expect(tree.integer).toBe('11');
  expect(tree.fraction).toBe('011001100110011001100110011001100110011001100110011');
  expect(tree.getValue()).toBe(3.4);
});
