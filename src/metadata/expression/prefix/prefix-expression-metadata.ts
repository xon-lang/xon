import { PrefixExpressionNode } from '../../../ast/expression/prefix/prefix-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class PrefixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: PrefixExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(tree.value, scope).type.declaration;
    // const attributeType = declaration.attribute(tree.id.text, [], [], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }
}
