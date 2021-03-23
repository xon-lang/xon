import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';

test('bool + bool', () => {
  const code = 'true + false';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
  expect(tree.left.getType().definition().abstract.name).toBe('Any');
});

test('bool + num', () => {
  const code = 'true + 9';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
});

test('bool + str', () => {
  const code = 'true +"str"';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('String');
});
