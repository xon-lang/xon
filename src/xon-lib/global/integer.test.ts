import { parseExpression } from '../../parse';
import { InfixExpressionTree } from '../../tree/expression/infix-expression/infix-expression.tree';

test('integer + integer', () => {
  const code = '1+16XA';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
  expect(tree.getType().definition().abstract.name).toBe('Number');
});
