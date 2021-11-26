import { AttributeTree } from '../../../../tree/attribute/attribute-tree';
import { IdToken } from '../../../../tree/id-token';
import { ExpressionStatementTree } from '../../../../tree/statement/expression-statement/expression-statement.tree';
import { DeclarationScope } from '../../declaration-scope';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  id: IdToken;
  type: TypeMetadata;

  constructor(tree: AttributeTree, scope: DeclarationScope) {
    super();

    this.id = tree.id;
    if (tree.type) this.type = getTypeMetadata(tree.type, scope);
    else
      this.type = getExpressionMetadata(
        (tree.body[0] as ExpressionStatementTree).expression,
        scope,
      ).type;
  }
}
