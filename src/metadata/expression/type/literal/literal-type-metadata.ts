import { Boolean2 } from '~/lib';
import { DeclarationScope, DefinitionMetadata, DefinitionTypeMetadata, TypeMetadata } from '~/metadata';
import { LiteralType } from '~/tree';

export class LiteralTypeMetadata extends TypeMetadata {
  constructor(public value: LiteralType, public definition: DefinitionMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition.attributesScope();
  }

  is(other: TypeMetadata): Boolean2 {
    if (other instanceof LiteralTypeMetadata && this.definition.is(other.definition)) return true;
    if (other instanceof DefinitionTypeMetadata) {
      return this.definition.is(other.definition);
    }

    throw new Error(`Not implemented for '${other.constructor.name}'`);
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof LiteralTypeMetadata) {
      return this.value === other.value;
    }
    return false;
  }
}
