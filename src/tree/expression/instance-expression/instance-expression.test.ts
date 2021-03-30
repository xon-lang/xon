import { parseExpression } from '../../../parse';
import { InstanceExpressionTree } from './instance-expression.tree';

test('instance pointer', () => {
  const code = '@';
  const tree = parseExpression<InstanceExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstanceExpressionTree);
});
