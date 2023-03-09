import { BodyableExpressionTree } from '~/tree/expression/bodyable/bodyable-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { parseExpression } from '~/util/parse';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const tree = parseExpression(code) as BodyableExpressionTree;

  expect(tree).toBeInstanceOf(BodyableExpressionTree);
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);
  expect((tree.expression as IdExpressionTree).name.text).toBe('abc');
  expect(tree.body.source.expressions.length).toBe(1);
});
