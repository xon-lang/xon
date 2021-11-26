import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { IdToken } from '../../../tree/id-token';
import { ExpressionMetadata } from './expression-metadata';
import { DeclarationScope } from '../declaration-scope';

export function expressionHandler(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof LiteralExpressionTree) {
    const literalName = tree.literal.constructor.name.replace('LiteralTree', '');
    const type = scope.get(literalName);
    tree.metadata = new ExpressionMetadata(type);
  }

  if (!tree.metadata) throw new Error(`Metadata not found for '${tree.constructor.name}'`);
  if ('id' in tree && tree['id'] instanceof IdToken && !tree['id'].metadata)
    throw new Error(`Metadata not set for id token in '${tree.constructor.name}'`);
  return tree.metadata;
}
