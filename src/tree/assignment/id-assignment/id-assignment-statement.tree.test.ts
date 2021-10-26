import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseAssignment } from '../../parse';
import { IdAssignmentTree } from './id-assignment-statement.tree';

test('has value', () => {
  const code = 'a = 123';
  const tree = parseAssignment<IdAssignmentTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentTree);

  expect(tree.id.text).toBe('a');
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(123);
});

test('has type and value', () => {
  const code = 'a = 123';
  const tree = parseAssignment<IdAssignmentTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentTree);

  expect(tree.id.text).toBe('a');
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(123);
});
