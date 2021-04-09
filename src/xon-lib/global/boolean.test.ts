import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';

test('boolean', () => {
  const code = 'true';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe(true);
});
