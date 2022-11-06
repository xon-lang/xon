import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { parseExpression } from '~/util/parse';

test('check true', () => {
  const code = '123';
  const tree = parseExpression(code) as LiteralExpressionTree;

  expect(tree).toBeInstanceOf(LiteralExpressionTree);
  expect(tree.literal.value).toBe(123);
});
