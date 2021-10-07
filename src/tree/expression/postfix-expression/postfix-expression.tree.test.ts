import { parseExpression } from '../../parse';
import { PostfixExpressionTree } from './postfix-expression.tree';

test('negative integer', () => {
  const code = '1++';
  const tree = parseExpression<PostfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(PostfixExpressionTree);

  expect(tree.toString()).toBe('1++');
});
