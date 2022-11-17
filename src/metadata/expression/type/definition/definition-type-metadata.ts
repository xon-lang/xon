import { Boolean2 } from '~/lib/core';
import { DefinitionMetadata } from '~/metadata/declaration/definition/definition-metadata';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';

export class DefinitionTypeMetadata extends TypeMetadata {
  constructor(public definition: DefinitionMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition.attributesScope();
  }

  is(other: TypeMetadata): Boolean2 {
    if (other instanceof DefinitionTypeMetadata) {
      return this.definition.is(other.definition);
    }
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof DefinitionTypeMetadata) {
      return this.definition.equals(other.definition);
    }

    return false;
  }
}
