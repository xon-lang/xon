import { IsExpressionNode } from '../../../ast/expression/is/is-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IsExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(node: IsExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(node.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(node.right, scope).type;
    // this.type = declaration.get(node.id.text);
  }
}
