import { InfixExpressionNode } from '../../../ast/expression/infix/infix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class InfixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(node: InfixExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(node.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(node.right, scope).type;
    // const attributeType = declaration.attribute(node.id.text, [], [rightType], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }
}
