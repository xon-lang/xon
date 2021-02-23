import { parseExpression } from '../../parse';
import { InfixExpressionTree } from '../../tree/expression/infix-expression/infix-expression.tree';

test('float + float', () => {
  const code = '1.1+1.1';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('Float');
});
