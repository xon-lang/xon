import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../../tree/parse';

test('any clone method exists', () => {
  const code = '3';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe(3);
});
