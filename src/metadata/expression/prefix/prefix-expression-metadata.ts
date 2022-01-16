import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class PrefixExpressionMetadata implements ExpressionMetadata {
  constructor(node: PrefixExpressionTree, scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(node.value, scope).type.declaration;
    // const attributeType = declaration.attribute(node.id.text, [], [], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  attributes(): DeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
