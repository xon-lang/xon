import { Issue } from '../../../issue-service/issue';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { GroupExpressionTree } from '../../../tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { IdTypeExpressionMetadata } from './id/id-type-expression-metadata';
import { LiteralTypeExpressionMetadata } from './literal/literal-type-expression-metadata';
import { TypeExpressionMetadata } from './type-expression-metadata';

export function getTypeExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): TypeExpressionMetadata {
  if (tree instanceof GroupExpressionTree) return getTypeExpressionMetadata(tree.expression, scope);
  if (tree instanceof LiteralExpressionTree) return new LiteralTypeExpressionMetadata(tree, scope);
  if (tree instanceof IdExpressionTree) return new IdTypeExpressionMetadata(tree, scope);

  Issue.errorFromTree(tree, `Type expression metadata not found for '${tree.constructor.name}'`);
}
