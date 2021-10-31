import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../parse';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { VariableDeclarationStatementTree } from './variable-declaration-statement.tree';

test('variable assignment', () => {
  const code = 'a: 1';
  const tree = parseStatement<VariableDeclarationStatementTree>(code);
  expect(tree).toBeInstanceOf(VariableDeclarationStatementTree);

  expect(tree.id.text).toBe('a');
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionTree).literal.value,
  ).toBe(1);
});
