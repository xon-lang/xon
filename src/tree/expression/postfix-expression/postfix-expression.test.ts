import { parseExpression } from '../../../parse';
import { PostfixExpressionTree } from './postfix-expression.tree';

test('unary minus', () => {
  const code = '34536~';
  const tree = parseExpression<PostfixExpressionTree>(code);

  expect(tree).toBeInstanceOf(PostfixExpressionTree);
  expect(tree.getType().name).toBe('Boolean');
});
