import { Boolean2 } from '@/lib/core';
import { DeclarationScope } from '@/metadata/declaration/scope/declaration-scope';
import { TypeMetadata } from '@/metadata/expression/type/type-metadata';

export class IntersectionTypeMetadata extends TypeMetadata {
  private _attributesScope: DeclarationScope;

  constructor(public left: TypeMetadata, public right: TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this._attributesScope) return this._attributesScope;

    return (this._attributesScope = this.left
      .attributesScope()
      .intersect(this.right.attributesScope()));
  }

  is(other: TypeMetadata): Boolean2 {
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof IntersectionTypeMetadata) {
      return this.left.equals(other.left) && this.right.equals(other.right);
    }
    return false;
  }
}
