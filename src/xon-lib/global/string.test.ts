import { parseExpression } from '../../parse';
import { InfixExpressionTree } from '../../tree/expression/infix-expression/infix-expression.tree';

test('str + bool', () => {
  const code = '"s"+ true';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});

test('str + num', () => {
  const code = '"s"+ 3';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});

test('str + str', () => {
  const code = '"s"+ "true"';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});
