import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';

test('num + num', () => {
  const code = '1.1+2x5';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('Float');
});
