import { Boolean2 } from '~/lib/core';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { TypeMetadata } from '~/metadata/expression/type/type-metadata';

export class IntersectionTypeMetadata extends TypeMetadata {
  private _attributesScope: DeclarationScope | null = null;

  constructor(public left: TypeMetadata, public right: TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope | null {
    if (this._attributesScope) return this._attributesScope;

    const rightScope = this.right.attributesScope();
    if (!rightScope) return null;
    this._attributesScope = this.left.attributesScope()?.intersect(rightScope) || null;
    return this._attributesScope;
  }

  is(): Boolean2 {
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof IntersectionTypeMetadata) {
      return this.left.equals(other.left) && this.right.equals(other.right);
    }
    return false;
  }
}
