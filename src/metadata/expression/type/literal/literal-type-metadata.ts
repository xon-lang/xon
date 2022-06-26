import { Boolean } from '../../../../lib/core';
import { LiteralType } from '../../../../tree/literal/literal-type';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { DefinitionTypeMetadata } from '../definition/definition-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  constructor(public value: LiteralType, public definition: DefinitionMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition.attributesScope();
  }

  is(other: TypeMetadata): Boolean {
    if (other instanceof LiteralTypeMetadata && this.definition.is(other.definition)) return true;
    if (other instanceof DefinitionTypeMetadata) {
      return this.definition.is(other.definition);
    }

    throw new Error(`Not implemented for '${other.constructor.name}'`);
  }

  equals(other: TypeMetadata): Boolean {
    if (other instanceof LiteralTypeMetadata) {
      return this.value === other.value;
    }
    return false;
  }
}
