import { Boolean2 } from '~/lib';
import { DeclarationScope, TypeMetadata } from '~/metadata';

export class UnionTypeMetadata extends TypeMetadata {
  private _attributesScope: DeclarationScope;

  constructor(public left: TypeMetadata, public right: TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this._attributesScope) return this._attributesScope;

    return (this._attributesScope = this.left
      .attributesScope()
      .union(this.right.attributesScope()));
  }

  is(): Boolean2 {
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof UnionTypeMetadata) {
      return this.left.equals(other.left) && this.right.equals(other.right);
    }
    return false;
  }

  static fromTypes(types: TypeMetadata[]): UnionTypeMetadata {
    if (types.length < 2) throw new Error('Types count should be at least 2 types');

    const type = new UnionTypeMetadata(types[0], types[1]);
    if (types.length > 2) {
      return UnionTypeMetadata.fromTypes([type, types[2]]);
    }
    return type;
  }
}
