import { IdExpressionNode } from '../../../ast/expression/id/id-expression-node';
import { DeclarationScope } from '../../declaration-scope';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { ObjectDefinitionMetadata } from '../../declaration/definition/object/object-definition-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: IdExpressionNode, scope: DeclarationScope) {
    super();

    // this.type  = declaration.type
    // const typeArguments = tree.typeArguments.map((x) => getTypeMetadata(x, scope));
    // tree.id.metadata = declaration;
    // this.type = declaration.type(typeArguments);
  }
}
