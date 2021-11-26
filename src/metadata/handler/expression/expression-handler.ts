import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { IdToken } from '../../../tree/id-token';
import { DeclarationMetadata } from '../../declaration-metadata';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { DeclarationScope } from '../declaration-scope';
import { ExpressionMetadata } from './expression-metadata';

export function expressionHandler(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof LiteralExpressionTree) {
    const literalName = tree.literal.constructor.name.replace('LiteralTree', '');
    tree.metadata = new ExpressionMetadata(scope.get(literalName).type);
  } else if (tree instanceof IdExpressionTree) {
    const declaration = scope.get(tree.id.text);
    // todo fix it later
    if (
      tree.id.text[0] == tree.id.text[0].toUpperCase() &&
      declaration.type instanceof IdTypeMetadata
    ) {
      tree.metadata = new ExpressionMetadata(declaration.type.constructorType);
    } else {
      tree.metadata = new ExpressionMetadata(declaration.type);
    }
    tree.id.metadata = new DeclarationMetadata(declaration.id, tree.metadata.type);
  }

  if (!tree.metadata) {
    throw new Error(`Metadata not found for '${tree.constructor.name}'`);
  }
  if ('id' in tree && tree['id'] instanceof IdToken && !tree['id'].metadata) {
    throw new Error(`Metadata not set for id token in '${tree.constructor.name}'`);
  }

  return tree.metadata;
}
