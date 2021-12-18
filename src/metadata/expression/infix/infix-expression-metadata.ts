import { InfixExpressionNode } from '../../../ast/expression/infix/infix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class InfixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: InfixExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(tree.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(tree.right, scope).type;
    // const attributeType = declaration.attribute(tree.id.text, [], [rightType], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }
}
