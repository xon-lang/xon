import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';

test('str + bool', () => {
  const code = '"s"+ true';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});

test('str + num', () => {
  const code = '"s"+ 3';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});

test('str + str', () => {
  const code = '"s"+ "true"';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});
