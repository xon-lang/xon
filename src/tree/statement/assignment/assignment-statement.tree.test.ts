import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseStatement } from '../../parse';
import { AssignmentStatementTree } from './assignment-statement.tree';

test('variable assignment', () => {
  const code = 'a = 1';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  expect(tree.id.text).toBe('a');
  expect((tree.value as LiteralExpressionNode).literal.value).toBe(1);
});
