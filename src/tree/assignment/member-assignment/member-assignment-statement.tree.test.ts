import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseAssignment } from '../../parse';
import { MemberAssignmentTree } from './member-assignment-statement.tree';

test('has value', () => {
  const code = 'object.a = 1';
  const tree = parseAssignment<MemberAssignmentTree>(code);

  expect((tree.instance as IdExpressionTree).name).toBe('object');
  expect(tree.name).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});
