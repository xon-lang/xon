import { IdAssignmentTree } from '../../assignment/id-assignment/id-assignment-statement.tree';
import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseAssignment } from '../../parse';

test('variable assignment', () => {
  const code = 'a = 1';
  const tree = parseAssignment<IdAssignmentTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentTree);

  expect(tree.name).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(2);
});
