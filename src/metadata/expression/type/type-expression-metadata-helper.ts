import { Issue } from '../../../issue-service/issue';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { GroupExpressionTree } from '../../../tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { FloatLiteralTree } from '../../../tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '../../../tree/literal/integer/integer-literal-tree';
import { StringLiteralTree } from '../../../tree/literal/string/string-literal-tree';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { IdTypeExpressionMetadata } from './id/id-type-expression-metadata';
import { IntersectionTypeExpressionMetadata } from './intersection/intersection-type-expression-metadata';
import { LiteralTypeExpressionMetadata } from './literal/literal-type-expression-metadata';
import { TypeExpressionMetadata } from './type-expression-metadata';
import { UnionTypeExpressionMetadata } from './union/union-type-expression-metadata';

export function getTypeExpressionMetadata(
  tree: ExpressionTree,
  scope: DeclarationScope,
): TypeExpressionMetadata {
  if (tree instanceof GroupExpressionTree) return getTypeExpressionMetadata(tree.expression, scope);
  if (tree instanceof LiteralExpressionTree) {
    let definition: () => DefinitionMetadata;
    if (tree.literal instanceof IntegerLiteralTree) definition = () => scope.core.integer;
    else if (tree.literal instanceof FloatLiteralTree) definition = () => scope.core.float;
    else if (tree.literal instanceof StringLiteralTree) definition = () => scope.core.string;
    return new LiteralTypeExpressionMetadata(tree.literal.value, definition);
  }

  if (tree instanceof IdExpressionTree) {
    const definition = () => scope.findDefinitionByName(tree.name.text);
    return new IdTypeExpressionMetadata(definition);
  }
  if (tree instanceof InfixExpressionTree && tree.name.text === 'or') {
    const left = () => getTypeExpressionMetadata(tree.left, scope);
    const right = () => getTypeExpressionMetadata(tree.right, scope);
    return new UnionTypeExpressionMetadata(left, right);
  }
  if (tree instanceof InfixExpressionTree && tree.name.text === 'and') {
    const left = () => getTypeExpressionMetadata(tree.left, scope);
    const right = () => getTypeExpressionMetadata(tree.right, scope);
    return new IntersectionTypeExpressionMetadata(left, right);
  }

  Issue.errorFromTree(tree, `Type expression metadata not found for '${tree.constructor.name}'`);
}
