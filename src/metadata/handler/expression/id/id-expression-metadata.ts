import { IdExpressionTree } from '../../../../tree/expression/id-expression/id-expression.tree';
import { DeclarationMetadata } from '../../../declaration-metadata';
import { IdTypeMetadata } from '../../../type/id/id-type-metadata';
import { TypeMetadata } from '../../../type/type-metadata';
import { DeclarationScope } from '../../declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: IdExpressionTree, scope: DeclarationScope) {
    super();
    const declaration = scope.get(tree.id.text);
    if (
      tree.id.text[0] == tree.id.text[0].toUpperCase() &&
      declaration.type instanceof IdTypeMetadata
    )
      this.type = declaration.type.constructorType;
    else this.type = declaration.type;

    tree.id.metadata = new DeclarationMetadata(declaration.id, this.type);
  }
}
