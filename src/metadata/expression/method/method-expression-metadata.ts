import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { DeclarationScope } from '../../scope/declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class MethodExpressionMetadata implements ExpressionMetadata {
  constructor(node: MethodExpressionTree, scope: DeclarationScope) {
    // for (const parameter of node.parameters) {
    //   scope.set(new ParameterMetadata(parameter, scope));
    // }
    // this.type = new MethodTypeMetadata(
    //   [],
    //   getExpressionMetadata(node.expression, scope).type,
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
