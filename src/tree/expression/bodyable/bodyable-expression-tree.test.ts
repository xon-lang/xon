import { BodyableExpressionTree } from '~/tree/expression/bodyable/bodyable-expression-tree';
import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { parseExpression } from '~/util/parse';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const tree = parseExpression(code) as BodyableExpressionTree;

  expect(tree).toBeInstanceOf(BodyableExpressionTree);
  expect(tree.expression).toBeInstanceOf(TokenExpressionTree);
  expect((tree.expression as TokenExpressionTree).name.text).toBe('abc');
  expect(tree.body.source.expressions.length).toBe(1);
});
