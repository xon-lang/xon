import { parseExpression } from '../../../parse';
import { InstanceMemberExpressionTree } from './instance-member-expression.tree';

test('simple member', () => {
  const code = '@prop';
  const tree = parseExpression<InstanceMemberExpressionTree>(code);
  expect(tree.name).toBe('prop');
});
