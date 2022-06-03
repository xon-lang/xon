import { Boolean } from '../../../lib/core';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class UnionTypeMetadata extends TypeMetadata {
  private _attributesScope: DeclarationScope;

  constructor(public left: () => TypeMetadata, public right: () => TypeMetadata) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this._attributesScope) return this._attributesScope;

    return (this._attributesScope = this.left()
      .attributesScope()
      .union(this.right().attributesScope()));
  }

  is(other: TypeMetadata): Boolean {
    throw new Error('Not implemented');
  }
}
