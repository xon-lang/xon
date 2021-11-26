import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { DeclarationScope } from '../declaration-scope';
import { ExpressionMetadata } from './expression-metadata';
import { IdExpressionMetadata } from './id/id-expression-metadata';
import { LiteralExpressionMetadata } from './literal/literal-expression-metadata';

export function getExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof LiteralExpressionTree)
    return (tree.metadata = new LiteralExpressionMetadata(tree, scope));
  if (tree instanceof IdExpressionTree)
    return (tree.metadata = new IdExpressionMetadata(tree, scope));
}
