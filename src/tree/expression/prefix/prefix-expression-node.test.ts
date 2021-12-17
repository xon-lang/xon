import { parseExpression } from '../../parse';
import { PrefixExpressionNode } from './prefix-expression-node';

test('negative integer', () => {
  const code = '-1';
  const tree = parseExpression<PrefixExpressionNode>(code);
  expect(tree).toBeInstanceOf(PrefixExpressionNode);

  expect(tree.toString()).toBe('-1');
});
