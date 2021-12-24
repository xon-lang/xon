import { MethodExpressionNode } from '../../../ast/expression/method/method-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class MethodExpressionMetadata implements ExpressionMetadata {
  constructor(node: MethodExpressionNode, scope: DeclarationScope) {
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
}
