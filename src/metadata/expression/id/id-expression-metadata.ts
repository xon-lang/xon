import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { AttributeDeclarationMetadata } from '../../declaration/attribute/attribute-declaration-metadata';
import { ClassDefinitionDeclarationMetadata } from '../../declaration/definition/class-definition-declaration-metadata';
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

    if (declaration instanceof AttributeDeclarationMetadata) {
      this.type = declaration.type(typeArguments);
    } else if (declaration instanceof ClassDefinitionDeclarationMetadata) {
      this.type = declaration.type(typeArguments);
    }
  }
}
