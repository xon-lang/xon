import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { AsExpressionNode } from './in-expression-node';

test('value is string', () => {
  const code = 'value as String';
  const tree = parseExpression<AsExpressionNode>(code);
  expect(tree).toBeInstanceOf(AsExpressionNode);

  expect(tree.value).toBeInstanceOf(IdExpressionNode);
  expect(tree.type).toBeInstanceOf(IdExpressionNode);
});
