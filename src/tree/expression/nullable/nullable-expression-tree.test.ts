import { IdExpressionTree, NullableExpressionTree } from '~/tree';
import { parseExpression } from '~/util';

test('nullable', () => {
  const code = 'abc?';
  const tree = parseExpression(code) as NullableExpressionTree;

  expect(tree).toBeInstanceOf(NullableExpressionTree);
  expect(tree.value).toBeInstanceOf(IdExpressionTree);
  expect((tree.value as IdExpressionTree).name.text).toBe('abc');
});
