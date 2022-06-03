import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeExpressionMetadata } from '../type-expression-metadata';

export class IdTypeExpressionMetadata extends TypeExpressionMetadata {
  constructor(public definition: () => DefinitionMetadata) {
    super();
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
