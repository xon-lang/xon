import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';

test('integer + integer', () => {
  const code = '1 + 16XA';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
  expect(tree.getType().definition().abstract.name).toBe('Number');
});
