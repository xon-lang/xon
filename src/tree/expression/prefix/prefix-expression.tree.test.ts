import { parseExpression } from '../../parse';
import { PrefixExpressionTree } from './prefix-expression.tree';

test('negative integer', () => {
  const code = '-1';
  const tree = parseExpression<PrefixExpressionTree>(code);
  expect(tree).toBeInstanceOf(PrefixExpressionTree);

  expect(tree.toString()).toBe('-1');
});
