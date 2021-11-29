import { IdExpressionTree } from '../../../tree/expression/id/id-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: IdExpressionTree, scope: DeclarationScope) {
    super();

    const declaration = scope.get(tree.id.text);
    const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(x, scope));
    tree.id.metadata = declaration;
    this.type = declaration.type(typeArguments);
  }
}
