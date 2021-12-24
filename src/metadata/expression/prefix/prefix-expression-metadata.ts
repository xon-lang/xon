import { PrefixExpressionNode } from '../../../ast/expression/prefix/prefix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class PrefixExpressionMetadata implements ExpressionMetadata {
  constructor(node: PrefixExpressionNode, scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(node.value, scope).type.declaration;
    // const attributeType = declaration.attribute(node.id.text, [], [], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  attributes(): DeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }
}
