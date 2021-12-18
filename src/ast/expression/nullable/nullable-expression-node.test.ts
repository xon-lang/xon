import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { NullableExpressionNode } from './nullable-expression-node';

test('nullable', () => {
  const code = 'abc?';
  const tree = parseExpression<NullableExpressionNode>(code);
  expect(tree).toBeInstanceOf(NullableExpressionNode);

  expect(tree.value).toBeInstanceOf(IdExpressionNode);
  expect((tree.value as IdExpressionNode).id.text).toBe('abc');
});
