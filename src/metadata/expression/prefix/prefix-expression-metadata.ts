import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class PrefixExpressionMetadata implements ExpressionMetadata {
  constructor(tree: PrefixExpressionTree, scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(tree.value, scope).type.declaration;
    // const attributeType = declaration.attribute(tree.id.text, [], [], null).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  attributes(): ParameterDeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }

  is(metadata: ExpressionMetadata): boolean {
    throw new Error('Not implemented');
  }
}
