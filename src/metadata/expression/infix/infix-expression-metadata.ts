import { InfixExpressionNode } from '../../../ast/expression/infix/infix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class InfixExpressionMetadata implements ExpressionMetadata {
  constructor(private node: InfixExpressionNode, private scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(node.left, scope).type.declaration;
    // const rightType = getExpressionMetadata(node.right, scope).type;
    // const attributeType = declaration.attribute(node.id.text, [], [rightType], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  attributes(): DeclarationMetadata[] {
    const left  = getExpressionMetadata(this.node.left, this.scope)
    const right  = getExpressionMetadata(this.node.right, this.scope)
    left.attributes().filter(x=>)
  }
}
