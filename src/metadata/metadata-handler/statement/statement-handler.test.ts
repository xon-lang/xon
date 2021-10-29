import * as path from 'path';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { HandlerScope } from '../handler-scope';
import { StatementHandler } from './statement-handler';

test('integer literal', () => {
  const code = '123';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
  const scope = HandlerScope.fromGlobPath(globPath);
  new StatementHandler(scope).handle(tree);
  expect((tree.expression as LiteralExpressionTree).literal.value).toBe(123);
  expect(tree.expression.definitionMetadata.name).toBe('Integer');
});
