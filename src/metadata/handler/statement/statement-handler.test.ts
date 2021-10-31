import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { StatementHandler } from './statement-handler';

test('expression', () => {
  const code = '123';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  new StatementHandler().handle(tree);
  expect((tree.expression as LiteralExpressionTree).literal.value).toBe(123);
  expect(tree.expression.typeMetadata.name).toBe('Integer');
});
