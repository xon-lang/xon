import { Issue } from '../../../issue-service/issue';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { GroupExpressionTree } from '../../../tree/expression/group/group-expression-tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { LiteralTypeExpressionMetadata } from './literal/literal-type-expression-metadata';
import { TypeExpressionMetadata } from './type-expression-metadata';

export function getTypeExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): TypeExpressionMetadata {
  try {
    if (tree instanceof GroupExpressionTree)
      return getTypeExpressionMetadata(tree.expression, scope);
    if (tree instanceof LiteralExpressionTree)
      return new LiteralTypeExpressionMetadata(tree, scope);

    throw `Type expression metadata not found for '${tree.constructor.name}'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}
