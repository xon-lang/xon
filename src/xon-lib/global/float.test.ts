import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';

test('float + float', () => {
  const code = '1.1+1.1';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(tree.getType().name).toBe('Float');
});
