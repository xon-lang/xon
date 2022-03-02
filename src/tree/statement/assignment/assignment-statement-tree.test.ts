import { parseStatement } from '../../../util/parse';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression-tree';
import { AssignmentStatementTree } from './assignment-statement-tree';

test('variable assignment', () => {
  const code = 'a = 1';
  const tree = parseStatement(code) as AssignmentStatementTree;
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  expect((tree.variable as IdExpressionTree).id.name.text).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});
