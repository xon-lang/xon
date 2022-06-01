import { IdExpressionTree } from '../../../../tree/expression/id/id-expression-tree';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeExpressionMetadata } from '../type-expression-metadata';

export class IdTypeExpressionMetadata extends TypeExpressionMetadata {
  constructor(private tree: IdExpressionTree, private scope: DeclarationScope) {
    super();
  }

  definition(): DefinitionMetadata {
    return this.scope.filterDefinitionByName(this.tree.name.text)[0];
  }

  attributesScope(): DeclarationScope {
    return this.definition().attributesScope();
  }

  is(other: TypeExpressionMetadata): boolean {
    if (other instanceof IdTypeExpressionMetadata) {
      const currentDefinition = this.definition();
      const otherDefinition = other.definition();

      return currentDefinition.is(otherDefinition);
    }
    throw new Error('Not implemented');
  }
}
