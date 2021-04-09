import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../tree/parse';

test('float + float', () => {
  const code = '1.1';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe(1.1);
});
