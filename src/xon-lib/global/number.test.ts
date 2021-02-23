import { parseExpression } from '../../parse';
import { InfixExpressionTree } from '../../tree/expression/infix-expression/infix-expression.tree';

test('num + num', () => {
  const code = '1.1+2x5';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('Float');
});
