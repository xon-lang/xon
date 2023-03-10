import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { parseExpression } from '~/util/parse';

test('positive float number', () => {
  const code = '123.456';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as TokenExpressionTree).name.text).toBe('123');
  expect((tree.right as TokenExpressionTree).name.text).toBe('456');
});

test('zero float number', () => {
  const code = '2x0.1';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as TokenExpressionTree).name.text).toBe('2x0');
  expect((tree.right as TokenExpressionTree).name.text).toBe('1');
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as TokenExpressionTree).name.text).toBe('5_999_245');
  expect((tree.right as TokenExpressionTree).name.text).toBe('15463_64');
});

test('radix float', () => {
  const code = '2x11.011001100110011001100110011001100110011001100110011';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as TokenExpressionTree).name.text).toBe('2x11');
  expect((tree.right as TokenExpressionTree).name.text).toBe('011001100110011001100110011001100110011001100110011');
});

test('16x123ABC_123.DDD12', () => {
  const code = '16x123ABC_123.DDD12';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('.');
  expect((tree.left as TokenExpressionTree).name.text).toBe('16x123ABC_123');
  expect((tree.right as TokenExpressionTree).name.text).toBe('DDD12');
});
