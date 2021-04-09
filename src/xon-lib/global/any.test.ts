import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';

test('any clone method exists', () => {
  const code = '3';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe(3);
});
