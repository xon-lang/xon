import * as path from 'path';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../../tree/parse';
import { HandlerScope } from '../handler-scope';
import { ExpressionHandler } from './statement-handler';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  const globPath = path.resolve('ast.xon/lib/@xon/core', '**/*.xon');
  const scope = HandlerScope.fromGlobPath(globPath);
  new ExpressionHandler(scope).handle(tree);
  expect(tree.literal.value).toBe(123);
  expect(tree.definitionMetadata.name).toBe('Integer');
});
