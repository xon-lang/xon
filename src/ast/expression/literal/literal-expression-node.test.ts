import { parseExpression } from '../../util/parse';
import { LiteralExpressionNode } from './literal-expression-node';

test('check true', () => {
  const code = '123';
  const node = parseExpression<LiteralExpressionNode>(code);
  expect(node).toBeInstanceOf(LiteralExpressionNode);

  expect(node.literal.value).toBe(123);
});
