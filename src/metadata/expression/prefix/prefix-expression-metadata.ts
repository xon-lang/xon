import { PrefixExpressionTree } from '../../../tree/expression/prefix-expression/prefix-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class PrefixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: PrefixExpressionTree, scope: DeclarationScope) {
    super();

    const declaration = getExpressionMetadata(tree.value, scope).type.declaration;
    const attribute = declaration.getMethodAttribute(tree.id.text, [], []);
    if (attribute.type instanceof FunctionTypeMetadata) this.type = attribute.type.resultType;
    else throw new Error('Wrong method type');
  }
}
