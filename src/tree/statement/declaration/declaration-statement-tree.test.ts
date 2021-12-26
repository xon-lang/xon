import { SingleBodyTree } from '../../body/single/single-body-tree';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression-tree';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { DeclarationStatementTree } from './declaration-statement-tree';

test('type and value', () => {
  const code = 'a Integer: 1';
  const tree = parseStatement<DeclarationStatementTree>(code);
  expect(tree).toBeInstanceOf(DeclarationStatementTree);

  expect(tree.declaration.modifier).toBe(null);
  expect(tree.declaration.id.name.text).toBe('a');
  expect((tree.declaration.type as IdExpressionTree).id.name.text).toBe('Integer');
  expect(
    (
      ((tree.declaration.body as SingleBodyTree).statement as ExpressionStatementTree)
        .expression as LiteralExpressionTree
    ).literal.value,
  ).toBe(1);
});
