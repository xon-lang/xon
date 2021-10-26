import { LiteralExpressionTree } from '../../expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../parse';
import { VariableDeclarationStatementTree } from './variable-declaration-statement.tree';

test('variable assignment', () => {
  const code = 'a := 1';
  const tree = parseStatement<VariableDeclarationStatementTree>(code);
  expect(tree).toBeInstanceOf(VariableDeclarationStatementTree);

  expect(tree.id.text).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});
