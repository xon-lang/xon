import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { PrefixExpressionTree } from './prefix-expression.tree';

test('unary minus', () => {
  const code = '-34536';
  const tree = parseExpression<PrefixExpressionTree>(code);
  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(evalExpression(tree)).toBe(-34536);
});
