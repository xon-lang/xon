import { parseExpression } from '../../parse';
import { AddExpressionTree } from '../../tree/expression/add-expression/add-expression.tree';

test('num + num', () => {
  const code = '1.1+2x5';
  const tree = parseExpression<AddExpressionTree>(code);
  expect(tree.getType().name).toBe('Float');
});
