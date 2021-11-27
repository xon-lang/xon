import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { DeclarationScope } from '../../declaration-scope';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  name: string;
  type: TypeMetadata;

  constructor(tree: AttributeTree, scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
    if (tree.type) this.type = getTypeMetadata(tree.type, scope);
    else {
      if (tree.body.length > 1) throw new Error('Body must have only expression');

      const statement = tree.body[0] as ExpressionStatementTree;
      if (!(statement instanceof ExpressionStatementTree))
        throw new Error('Statement must be an expression');

      this.type = getExpressionMetadata(statement.expression, scope).type;
    }
  }
}
