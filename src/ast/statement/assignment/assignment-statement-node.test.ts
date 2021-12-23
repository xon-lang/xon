import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseStatement } from '../../util/parse';
import { AssignmentStatementNode } from './assignment-statement-node';

test('variable assignment', () => {
  const code = 'a = 1';
  const node = parseStatement<AssignmentStatementNode>(code);
  expect(node).toBeInstanceOf(AssignmentStatementNode);

  expect(node.id.name.text).toBe('a');
  expect((node.value as LiteralExpressionNode).literal.value).toBe(1);
});
