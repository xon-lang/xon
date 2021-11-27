import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { DeclarationScope } from '../../declaration-scope';
import { getExpressionMetadata } from '../../expression/expression-metadata-helper';
import { TypeMetadata } from '../../type/type-metadata';
import { getTypeMetadata } from '../../type/type-metadata-helper';
import { DeclarationMetadata } from '../declaration-metadata';

export class AttributeDeclarationMetadata extends DeclarationMetadata {
  typeParameters: TypeMetadata[];

  constructor(public name: string, public type: TypeMetadata, public scope: DeclarationScope) {
    super();
  }

  useTypeParameters(typeParameters: TypeMetadata[]): AttributeDeclarationMetadata {
    this.typeParameters = typeParameters;
    return this;
  }

  static fromTree(tree: AttributeTree, scope: DeclarationScope): AttributeDeclarationMetadata {
    let type: TypeMetadata;
    if (tree.type) type = getTypeMetadata(tree.type, scope);
    else {
      if (tree.body.length > 1) throw new Error('Body must have only expression');

      const statement = tree.body[0] as ExpressionStatementTree;
      if (!(statement instanceof ExpressionStatementTree))
        throw new Error('Statement must be an expression');

      type = getExpressionMetadata(statement.expression, scope).type;
    }
    return new AttributeDeclarationMetadata(tree.id.text, type, scope);
  }
}
