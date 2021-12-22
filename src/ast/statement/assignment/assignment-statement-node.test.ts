import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseStatement } from '../../parse';
import { AssignmentStatementNode } from './assignment-statement-node';

test('variable assignment', () => {
  const code = 'a = 1';
  const tree = parseStatement<AssignmentStatementNode>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementNode);

  expect(tree.id.text).toBe('a');
  expect((tree.value as LiteralExpressionNode).literal.value).toBe(1);
});
