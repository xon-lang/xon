import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class MethodExpressionMetadata implements ExpressionMetadata {
  constructor(tree: MethodExpressionTree, scope: DeclarationScope) {
    // for (const parameter of tree.parameters) {
    //   scope.set(new ParameterMetadata(parameter, scope));
    // }
    // this.type = new MethodTypeMetadata(
    //   [],
    //   getExpressionMetadata(tree.expression, scope).type,
    //   scope,
    // );
  }

  attributes(): AttributeDeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
