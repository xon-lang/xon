import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { InExpressionNode } from './in-expression-node';

test('value is string', () => {
  const code = 'value as String';
  const tree = parseExpression<InExpressionNode>(code);
  expect(tree).toBeInstanceOf(InExpressionNode);

  expect(tree.value).toBeInstanceOf(IdExpressionNode);
  expect(tree.type).toBeInstanceOf(IdExpressionNode);
});
