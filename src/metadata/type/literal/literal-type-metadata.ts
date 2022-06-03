import { Boolean } from '../../../lib/core';
import { LiteralType } from '../../../tree/literal/literal-type';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { IdTypeMetadata } from '../id/id-type-metadata';
import { TypeMetadata } from '../type-metadata';

export class LiteralTypeMetadata extends TypeMetadata {
  constructor(public value: LiteralType, public definition: () => DefinitionMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition().attributesScope();
  }

  is(metadata: TypeMetadata): Boolean {
    if (metadata instanceof LiteralTypeMetadata && this.value === metadata.value) return true;
    if (metadata instanceof IdTypeMetadata) {
      return this.definition().is(metadata.definition());
    }

    throw new Error('Not implemented');
  }
}
