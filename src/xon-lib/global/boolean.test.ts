import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../tree/parse';

test('boolean', () => {
  const code = 'true';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe(true);
});
