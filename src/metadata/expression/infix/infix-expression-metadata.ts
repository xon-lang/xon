import { InfixExpressionNode } from '../../../ast/expression/infix/infix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class InfixExpressionMetadata implements ExpressionMetadata {
  constructor(node: InfixExpressionNode, scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(node.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(node.right, scope).type;
    // const attributeType = declaration.attribute(node.id.text, [], [rightType], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  attributes(): DeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }
}
