import { IdExpressionTree } from '@/tree/expression/id/id-expression-tree';
import { NullableExpressionTree } from '@/tree/expression/nullable/nullable-expression-tree';
import { parseExpression } from '@/util/parse';

test('nullable', () => {
  const code = 'abc?';
  const tree = parseExpression(code) as NullableExpressionTree;

  expect(tree).toBeInstanceOf(NullableExpressionTree);
  expect(tree.value).toBeInstanceOf(IdExpressionTree);
  expect((tree.value as IdExpressionTree).name.text).toBe('abc');
});
