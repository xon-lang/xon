import { LiteralExpressionTree } from '../../expression/literal/literal-expression-tree';
import { parseStatement } from '../../util/parse';
import { AssignmentStatementTree } from './assignment-statement-tree';

test('variable assignment', () => {
  const code = 'a = 1';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  expect(tree.id.name.text).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});
