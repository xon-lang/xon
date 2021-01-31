import { parseStatement } from '../../../parse';
import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { AssignmentStatementTree } from './assignment-statement.tree';

test('simple assignment', () => {
  const code = 'a = 220';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree.name).toBe('a');
  expect(tree.value).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(
    220
  );
});
