import { PostfixExpressionTree } from '~/tree/expression/postfix/postfix-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('exclamation', () => {
  const code = '1!';
  const tree = parseExpression(code) as PostfixExpressionTree;

  expect(tree).toBeInstanceOf(PostfixExpressionTree);
  expect(tree.operator.text).toBe('!');
  expect(evaluate(tree.expression)).toBe(1);
});

test('exclamation plus', () => {
  const code = 'ctx.parameters[]!+';
  const tree = parseExpression(code) as PostfixExpressionTree;

  expect(tree).toBeInstanceOf(PostfixExpressionTree);
  expect(tree.operator.text).toBe('+');
  expect((tree.expression as PrefixExpressionTree).operator.text).toBe('!');
});
