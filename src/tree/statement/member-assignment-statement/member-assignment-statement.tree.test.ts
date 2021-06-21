import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../parse';
import { MemberAssignmentStatementTree } from './member-assignment-statement.tree';

test('has value', () => {
  const code = 'this.a = 220';
  const tree = parseStatement<MemberAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(MemberAssignmentStatementTree);

  expect(tree.name).toBe('a');
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(220);
});
