import { MemberExpressionNode } from '../../../ast/expression/member/member-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class MemberExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(node: MemberExpressionNode, scope: DeclarationScope) {
    super();

    // const declaration = getExpressionMetadata(node.instance, scope).type.declaration;
    // const typeArguments = node.typeArguments.map((x) => getTypeMetadata(x, scope));
    // const attribute = declaration.attribute(node.id.text, typeArguments, [], null);

    // this.type = attribute.type(typeArguments);
  }
}
