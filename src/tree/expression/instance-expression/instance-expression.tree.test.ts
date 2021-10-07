import { parseExpression } from '../../parse';
import { InstanceExpressionTree } from './instance-expression.tree';

test('has this keyword', () => {
  const code = '$';
  const tree = parseExpression<InstanceExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstanceExpressionTree);
});
