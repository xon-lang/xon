import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class DefinitionTypeMetadata extends TypeMetadata {
  constructor(public definition: () => DefinitionMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition().attributesScope();
  }

  is(other: TypeMetadata): boolean {
    if (other instanceof DefinitionTypeMetadata) {
      const currentDefinition = this.definition();
      const otherDefinition = other.definition();

      return currentDefinition.is(otherDefinition);
    }
    throw new Error('Not implemented');
  }
}