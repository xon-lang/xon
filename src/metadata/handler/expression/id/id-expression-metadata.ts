import { IdExpressionTree } from '../../../../tree/expression/id-expression/id-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: IdExpressionTree, scope: DeclarationScope) {
    super();

    const declaration = scope.get(tree.id.text) as AttributeDeclarationMetadata;
    tree.id.metadata = declaration;
    this.type = declaration.type;
  }
}
