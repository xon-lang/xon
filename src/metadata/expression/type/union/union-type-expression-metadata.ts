import { Boolean } from '../../../../lib/core';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeExpressionMetadata } from '../type-expression-metadata';

export class UnionTypeExpressionMetadata extends TypeExpressionMetadata {
  private _attributesScope: DeclarationScope;

  constructor(
    public left: () => TypeExpressionMetadata,
    public right: () => TypeExpressionMetadata,
  ) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this._attributesScope) return this._attributesScope;

    return (this._attributesScope = this.left()
      .attributesScope()
      .union(this.right().attributesScope()));
  }

  is(other: TypeExpressionMetadata): Boolean {
    throw new Error('Not implemented');
  }
}
