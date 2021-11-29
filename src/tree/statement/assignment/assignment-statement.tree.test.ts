import { IdAssignmentTree } from '../../assignment/id/id-assignment-statement.tree';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression.tree';
import { parseAssignment } from '../../parse';

test('variable assignment', () => {
  const code = 'a = 1';
  const tree = parseAssignment<IdAssignmentTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentTree);

  expect(tree.id.text).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});
