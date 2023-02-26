import { BodyExpressionTree } from '~/tree/expression/body/body-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('only expression', () => {
  const code = 'if (-1)\n  abc';
  const tree = parseExpression(code) as BodyExpressionTree;

  expect(tree).toBeInstanceOf(BodyExpressionTree);
  expect(tree.expression).toBeInstanceOf(InvokeExpressionTree);
  const args = (tree.expression as InvokeExpressionTree).arguments ?? [];
  expect(evaluate(args[0].value)).toBe(-1);
});

test('if statement', () => {
  const code = `if (b is c)
  return #{new SingleBodyTree(ctx)}`;
  const tree = parseExpression(code) as BodyExpressionTree;

  expect(tree).toBeInstanceOf(BodyExpressionTree);
  expect(tree.expression).toBeInstanceOf(InvokeExpressionTree);
});
