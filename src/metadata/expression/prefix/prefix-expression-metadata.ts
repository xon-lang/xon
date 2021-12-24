import { PrefixExpressionNode } from '../../../ast/expression/prefix/prefix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class PrefixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(node: PrefixExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(node.value, scope).type.declaration;
    // const attributeType = declaration.attribute(node.id.text, [], [], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }
}
