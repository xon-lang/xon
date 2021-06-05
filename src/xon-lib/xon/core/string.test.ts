import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../../tree/parse';

test('str + bool', () => {
  const code = '"hi"';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe('hi');
});
