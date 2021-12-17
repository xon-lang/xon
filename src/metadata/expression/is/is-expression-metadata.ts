import { InfixExpressionNode } from '../../../tree/expression/infix/infix-expression-node';
import { IsExpressionNode } from '../../../tree/expression/is/is-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class IsExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: IsExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(tree.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(tree.right, scope).type;
    // this.type = declaration.get(tree.id.text);
  }
}
