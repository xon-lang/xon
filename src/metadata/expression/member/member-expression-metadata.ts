import { MemberExpressionTree } from '../../../tree/expression/member-expression/member-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class MemberExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: MemberExpressionTree, scope: DeclarationScope) {
    super();

    const declaration = getExpressionMetadata(tree.instance, scope).type.declaration;
    const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(x, scope));
    const attributes = declaration.getAttributes(tree.id.text, typeArguments);

    if (attributes.length > 1) throw new Error(`To many '${tree.id.text}' attributes`);
    this.type = attributes[0].type(typeArguments);
  }
}
