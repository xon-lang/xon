import { Issue } from '../../issue-service/issue';
import { ExpressionTree } from '../../tree/expression/expression-tree';
import { GroupExpressionTree } from '../../tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '../../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../../tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../../tree/expression/literal/literal-expression-tree';
import { MethodExpressionTree } from '../../tree/expression/method/method-expression-tree';
import { FloatLiteralTree } from '../../tree/literal/float/float-literal-tree';
import { IntegerLiteralTree } from '../../tree/literal/integer/integer-literal-tree';
import { StringLiteralTree } from '../../tree/literal/string/string-literal-tree';
import { DefinitionMetadata } from '../declaration/definition/definition-metadata';
import { getParameterMetadata } from '../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../declaration/scope/declaration-scope';
import { IdTypeMetadata } from './id/id-type-metadata';
import { IntersectionTypeMetadata } from './intersection/intersection-type-metadata';
import { LiteralTypeMetadata } from './literal/literal-type-metadata';
import { MethodTypeMetadata } from './method/method-type-metadata';
import { TypeMetadata } from './type-metadata';
import { UnionTypeMetadata } from './union/union-type-metadata';

export function getTypeMetadata(tree: ExpressionTree, scope: DeclarationScope): TypeMetadata {
  if (tree instanceof GroupExpressionTree) return getTypeMetadata(tree.expression, scope);
  if (tree instanceof LiteralExpressionTree) {
    let definition: () => DefinitionMetadata;
    if (tree.literal instanceof IntegerLiteralTree) definition = () => scope.core.integer;
    else if (tree.literal instanceof FloatLiteralTree) definition = () => scope.core.float;
    else if (tree.literal instanceof StringLiteralTree) definition = () => scope.core.string;
    return new LiteralTypeMetadata(tree.literal.value, definition);
  }

  if (tree instanceof IdExpressionTree) {
    const definition = () => scope.findDefinitionByName(tree.name.text);
    return new IdTypeMetadata(definition);
  }
  if (tree instanceof InfixExpressionTree) {
    const left = () => getTypeMetadata(tree.left, scope);
    const right = () => getTypeMetadata(tree.right, scope);
    if (tree.name.text === 'or') return new UnionTypeMetadata(left, right);
    if (tree.name.text === 'and') return new IntersectionTypeMetadata(left, right);

    throw new Error('Not implemented');
  }

  if (tree instanceof MethodExpressionTree) {
    // todo fix for flat
    const parameters = () => tree.parameters.map((x) => getParameterMetadata(x, scope)).flat();
    const result = () => getTypeMetadata(tree.value, scope);
    return new MethodTypeMetadata(parameters, result);
  }

  Issue.errorFromTree(tree, `Type expression metadata not found for '${tree.constructor.name}'`);
}
