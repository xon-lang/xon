import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationScope } from '../../declaration-scope';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { FactoryDeclarationMetadata } from '../../declaration/factory/factory-declaration-metadata';
import { ModelDeclarationMetadata } from '../../declaration/model/model-declaration-metadata';
import { ObjectDeclarationMetadata } from '../../declaration/object/object-declaration-metadata';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata implements ExpressionMetadata {
  constructor(private node: IdExpressionTree, private scope: DeclarationScope) {}

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.node.id.name.text);
  }

  attributes(): DeclarationMetadata[] {
    const declaration = this.declaration();
    if (
      declaration instanceof ModelDeclarationMetadata ||
      declaration instanceof FactoryDeclarationMetadata ||
      declaration instanceof ObjectDeclarationMetadata
    ) {
      return declaration.attributes();
    }
    if (declaration instanceof ParameterDeclarationMetadata) {
      return declaration.type().attributes();
    }

    throw new Error('Not implemented');
  }
}
