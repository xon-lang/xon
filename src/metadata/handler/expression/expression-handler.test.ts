import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseExpression } from '../../../tree/parse';
import { HandlerScope } from '../handler-scope';
import { ExpressionHandler } from './expression-handler';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree).toBeInstanceOf(LiteralExpressionTree);

  const scope = HandlerScope.fromCoreModule();
  new ExpressionHandler(scope).handle(tree);
  expect(tree.literal.value).toBe(123);
  expect(tree.typeMetadata.name).toBe('Integer');
});
