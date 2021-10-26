import { parseExpression } from '../../parse';
import { InstanceMemberExpressionTree } from './instance-member-expression.tree';

test('has this keyword', () => {
  const code = '$someProp';
  const tree = parseExpression<InstanceMemberExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstanceMemberExpressionTree);

  expect(tree.id.text).toBe('someProp');
});
