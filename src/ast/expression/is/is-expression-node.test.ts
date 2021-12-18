import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { InfixExpressionNode } from '../infix/infix-expression-node';
import { IsExpressionNode } from './is-expression-node';

test('value is string', () => {
  const code = 'value in 1..5';
  const tree = parseExpression<IsExpressionNode>(code);
  expect(tree).toBeInstanceOf(IsExpressionNode);

  expect(tree.value).toBeInstanceOf(IdExpressionNode);
  expect(tree.type).toBeInstanceOf(InfixExpressionNode);
});
