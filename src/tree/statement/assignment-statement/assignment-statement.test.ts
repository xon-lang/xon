import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../parse';
import { AssignmentStatementTree } from './assignment-statement.tree';

test('has value', () => {
  const code = 'a = 220';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  expect(tree.name).toBe('a');
  expect(tree.type).toBeUndefined();
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(220);
});

test('has type and value', () => {
  const code = 'a Integer = 220';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  expect(tree.name).toBe('a');
  expect(tree.type.name).toBe('Integer');
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(220);
});
