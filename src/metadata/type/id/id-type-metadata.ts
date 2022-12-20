import { Boolean2 } from '~/lib/core';
import { AttributeDeclarationMetadata } from '~/metadata/declaration/attribute/attribute-metadata';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { ModelDeclarationMetadata } from '~/metadata/declaration/model/model-declaration-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';

export class IdTypeMetadata extends TypeMetadata {
  constructor(public declaration: DeclarationMetadata) {
    super();
  }

  attributes(): AttributeDeclarationMetadata[] {
    if (this.declaration instanceof ModelDeclarationMetadata) {
      return this.declaration.attributes;
    }

    return [];
  }

  is(other: TypeMetadata): Boolean2 {
    if (other instanceof IdTypeMetadata) {
      return this.declaration.is(other.declaration);
    }
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof IdTypeMetadata) {
      return this.declaration.equals(other.declaration);
    }

    return false;
  }
}
