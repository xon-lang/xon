import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../parse';
import { IdAssignmentStatementTree } from './id-assignment-statement.tree';

test('has value', () => {
  const code = 'a = 220';
  const tree = parseStatement<IdAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentStatementTree);

  expect(tree.name).toBe('a');
  expect(tree.type).toBeUndefined();
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(220);
});

test('has type and value', () => {
  const code = 'a Integer = 220';
  const tree = parseStatement<IdAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentStatementTree);

  expect(tree.name).toBe('a');
  expect(tree.type.name).toBe('Integer');
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(220);
});
