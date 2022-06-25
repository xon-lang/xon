import { Boolean } from '../../../lib/core';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class DefinitionTypeMetadata extends TypeMetadata {
  constructor(public definition: DefinitionMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition.attributesScope();
  }

  is(other: TypeMetadata): Boolean {
    if (other instanceof DefinitionTypeMetadata) {
      return this.definition.is(other.definition);
    }
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean {
    if (other instanceof DefinitionTypeMetadata) {
      return this.definition.equals(other.definition);
    }
    return false;
  }
}
