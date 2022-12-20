import { Boolean2, Integer } from '~/lib/core';
import { AttributeDeclarationMetadata } from '~/metadata/declaration/attribute/attribute-metadata';
import { ModelDeclarationMetadata } from '~/metadata/declaration/model/model-declaration-metadata';
import { CoreDeclarationScope } from '~/metadata/declaration/scope/core/core-declaration-scope';
import { IdTypeMetadata } from '~/metadata/type/id/id-type-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';

export class IntegerTypeMetadata extends TypeMetadata {
  public model: ModelDeclarationMetadata;

  constructor(public value: Integer) {
    super();
    this.model = CoreDeclarationScope.instance.integer;
  }

  attributes(): AttributeDeclarationMetadata[] {
    return this.model.attributes;
  }

  is(other: TypeMetadata): Boolean2 {
    // if (other instanceof UnionType) {
    //   return this.is(other.left) || this.is(other.right);
    // }
    if (other instanceof IntegerTypeMetadata) {
      return this.value === other.value;
    }
    if (other instanceof IdTypeMetadata) {
      return this.model.is(other.declaration);
    }

    return false;
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof IntegerTypeMetadata) {
      return this.value === other.value;
    }

    return false;
  }
}
