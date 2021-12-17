import { parseExpression } from '../../parse';
import { LiteralExpressionNode } from './literal-expression-node';

test('check true', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionNode>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionNode);

  expect(tree.literal.value).toBe(123);
});
