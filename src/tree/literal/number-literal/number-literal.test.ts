import { parseLiteral } from '../../../parse';
import { NumberLiteralTree } from './number-literal.tree';

test('zero int number', () => {
  const code = '0';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(0);
});

test('positive int number', () => {
  const code = '2523';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(2523);
});

test('positive float number', () => {
  const code = '123.123';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(123.123);
});

test('zero float number', () => {
  const code = '0.0';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(0.0);
});

test('zero float number no base', () => {
  const code = '.0';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(0.0);
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(5999245.1546364);
  expect(tree.value).toBe(5999245.1546364);
  expect(tree.value).toBe(5999245.1546364);
  expect(tree.value).toBe(5999245.1546364);
});

test('radix int', () => {
  const code = '16x1ABC';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.value).toBe(0x1abc);
});

test('radix float', () => {
  const code = '2x11.011001100110011001100110011001100110011001100110011';
  const tree = parseLiteral<NumberLiteralTree>(code);
  expect(tree.base).toBe('2');
  expect(tree.integerValue).toBe('11');
  expect(tree.fractionValue).toBe('011001100110011001100110011001100110011001100110011');
  expect(tree.value).toBe(3.4);
});
