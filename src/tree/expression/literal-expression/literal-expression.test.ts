import { parseExpression } from '../../../parse';
import { LiteralExpressionTree } from './literal-expression.tree';

test('check true', () => {
  const code = 'true';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.literal.value).toBe(true);
});
