import { Boolean2 } from '~/lib/core';
import { DeclarationScope } from '~/metadata/declaration/scope/declaration-scope';
import { TypeMetadata } from '~/metadata/type/type-metadata';

export class UnionType extends TypeMetadata {
  private _attributesScope: DeclarationScope | null = null;

  constructor(public left: TypeMetadata, public right: TypeMetadata) {
    super();
  }

  scope(): DeclarationScope {
    if (this._attributesScope) {
      return this._attributesScope;
    }

    const left = this.left.scope();
    const right = this.right.scope();
    this._attributesScope = left.union(right);

    return this._attributesScope;
  }

  is(): Boolean2 {
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean2 {
    if (other instanceof UnionType) {
      return this.left.equals(other.left) && this.right.equals(other.right);
    }

    return false;
  }

  static fromTypes(types: TypeMetadata[]): UnionType {
    if (types.length < 2) throw new Error('Types count should be at least 2 types');

    const type = new UnionType(types[0], types[1]);
    if (types.length > 2) {
      return UnionType.fromTypes([type, ...types.slice(2)]);
    }

    return type;
  }
}
