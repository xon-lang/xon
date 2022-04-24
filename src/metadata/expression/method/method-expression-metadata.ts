import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class MethodExpressionMetadata implements ExpressionMetadata {
  constructor(tree: MethodExpressionTree, scope: DeclarationScope) {
    const innerScope = scope.create();
    // for (const parameter of tree.parameters) {
    //   scope.set(new ParameterMetadata(parameter, scope));
    // }
    // this.type = new MethodTypeMetadata(
    //   [],
    //   getExpressionMetadata(tree.expression, scope).type,
    //   scope,
    // );
  }

  attributes(): ParameterDeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
