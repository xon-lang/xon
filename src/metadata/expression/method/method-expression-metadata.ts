import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class MethodExpressionMetadata extends ExpressionMetadata {
  constructor(tree: MethodExpressionTree, scope: DeclarationScope) {
    super();
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

  attributes(): DeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
