import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { DeclarationMetadata } from '../../declaration/declaration-metadata';
import { FactoryDeclarationMetadata } from '../../declaration/factory/factory-declaration-metadata';
import { ModelDeclarationMetadata } from '../../declaration/model/model-declaration-metadata';
import { ObjectDeclarationMetadata } from '../../declaration/object/object-declaration-metadata';
import { ParameterDeclarationMetadata } from '../../declaration/parameter/parameter-declaration-metadata';
import { DeclarationScope } from '../../scope/declaration-scope';
import { ExpressionMetadata } from '../expression-metadata';

export class IdExpressionMetadata implements ExpressionMetadata {
  constructor(private node: IdExpressionTree, private scope: DeclarationScope) {}

  declaration(): DeclarationMetadata {
    return this.scope.findByName(this.node.id.name.text);
  }

  attributes(): ParameterDeclarationMetadata[] {
    return this.declaration().attributes();
  }

  is(metadata: ExpressionMetadata): boolean {
    const declaration = this.declaration();

    if (declaration instanceof ParameterDeclarationMetadata) {
      return declaration.is(metadata);
    }

    if (
      metadata instanceof IdExpressionMetadata &&
      (declaration instanceof ModelDeclarationMetadata ||
        declaration instanceof ObjectDeclarationMetadata ||
        declaration instanceof FactoryDeclarationMetadata)
    ) {
      return declaration.is(metadata.declaration());
    }

    return false;
  }
}
