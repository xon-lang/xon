import { Boolean2 } from '~/lib';
import { DeclarationScope, TypeMetadata } from '~/metadata';

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
