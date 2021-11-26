import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { IdToken } from '../../../tree/id-token';
import { DeclarationMetadata } from '../../declaration-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { DeclarationScope } from '../declaration-scope';
import { ExpressionMetadata } from './expression-metadata';
import { LiteralExpressionMetadata } from './literal/literal-expression-handler';

export function getExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof LiteralExpressionTree)
    return (tree.metadata = new LiteralExpressionMetadata(tree, scope));
  else if (tree instanceof IdExpressionTree) {
  
  }

  if (!tree.metadata) {
    throw new Error(`Metadata not found for '${tree.constructor.name}'`);
  }
  if ('id' in tree && tree['id'] instanceof IdToken && !tree['id'].metadata) {
    throw new Error(`Metadata not set for id token in '${tree.constructor.name}'`);
  }

  return tree.metadata;
}
