import { parseExpression } from '../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { NullableExpressionTree } from './nullable-expression-tree';

test('nullable', () => {
  const code = 'abc?';
  const tree = parseExpression<NullableExpressionTree>(code);
  expect(tree).toBeInstanceOf(NullableExpressionTree);

  expect(tree.value).toBeInstanceOf(IdExpressionTree);
  expect((tree.value as IdExpressionTree).id.name.text).toBe('abc');
});
