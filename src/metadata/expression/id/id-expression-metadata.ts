import { IdExpressionNode } from '../../../ast/expression/id/id-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(node: IdExpressionNode, scope: DeclarationScope) {
    super();

    // this.type  = declaration.type
    // const typeArguments = node.typeArguments.map((x) => getTypeMetadata(x, scope));
    // node.id.metadata = declaration;
    // this.type = declaration.type(typeArguments);
  }
}
