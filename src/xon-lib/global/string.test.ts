import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';

test('str + bool', () => {
  const code = '"hi"';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe('hi');
});
