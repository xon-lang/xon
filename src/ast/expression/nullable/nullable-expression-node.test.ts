import { parseExpression } from '../../util/parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { NullableExpressionNode } from './nullable-expression-node';

test('nullable', () => {
  const code = 'abc?';
  const node = parseExpression<NullableExpressionNode>(code);
  expect(node).toBeInstanceOf(NullableExpressionNode);

  expect(node.value).toBeInstanceOf(IdExpressionNode);
  expect((node.value as IdExpressionNode).id.name.text).toBe('abc');
});
