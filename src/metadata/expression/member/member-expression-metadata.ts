import { MemberExpressionNode } from '../../../ast/expression/member/member-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class MemberExpressionMetadata implements ExpressionMetadata {
  constructor(node: MemberExpressionNode, scope: DeclarationScope) {
    // const declaration = getExpressionMetadata(node.instance, scope).type.declaration;
    // const typeArguments = node.typeArguments.map((x) => getTypeMetadata(x, scope));
    // const attribute = declaration.attribute(node.id.text, typeArguments, [], null);
    // this.type = attribute.type(typeArguments);
  }

  attributes(): DeclarationMetadata[] {
    throw new Error('Method not implemented.');
  }
}
