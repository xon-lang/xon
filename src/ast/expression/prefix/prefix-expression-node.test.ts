import { parseExpression } from '../../parse';
import { PrefixExpressionNode } from './prefix-expression-node';

test('negative integer', () => {
  const code = '-1';
  const node = parseExpression<PrefixExpressionNode>(code);
  expect(node).toBeInstanceOf(PrefixExpressionNode);

  expect(node.toString()).toBe('-1');
});
