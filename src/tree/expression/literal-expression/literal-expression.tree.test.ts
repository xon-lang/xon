import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from './literal-expression.tree';

test('check true', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  expect(tree.literal.value).toBe(123);
});
