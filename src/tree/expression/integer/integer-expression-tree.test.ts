import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { parseExpression } from '~/util/parse';

test('zero int number', () => {
  const code = '0';
  const tree = parseExpression(code) as IntegerExpressionTree;

  expect(tree).toBeInstanceOf(IntegerExpressionTree);
  expect(tree.value).toBe(0);
});

test('positive int number', () => {
  const code = '2x01110';
  const tree = parseExpression(code) as IntegerExpressionTree;

  expect(tree).toBeInstanceOf(IntegerExpressionTree);
  expect(tree.value).toBe(0b01110);
});

test('radix int', () => {
  const code = '16x1a_b_c';
  const tree = parseExpression(code) as IntegerExpressionTree;

  expect(tree).toBeInstanceOf(IntegerExpressionTree);
  expect(tree.integer).toBe('1a_b_c');
  expect(tree.value).toBe(0x1abc);
});
