import { Boolean } from '../../../../lib/core';
import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeExpressionMetadata } from '../type-expression-metadata';
import { getTypeExpressionMetadata } from '../type-expression-metadata-helper';

export class InfixTypeExpressionMetadata extends TypeExpressionMetadata {
  private _attributesScope: DeclarationScope;

  constructor(private tree: InfixExpressionTree, private scope: DeclarationScope) {
    super();
  }

  attributesScope(): DeclarationScope {
    if (this._attributesScope) return this._attributesScope;

    const left = getTypeExpressionMetadata(this.tree.left, this.scope);
    const right = getTypeExpressionMetadata(this.tree.right, this.scope);
    switch (this.tree.name.text) {
      case 'or':
        return (this._attributesScope = left.attributesScope().union(right.attributesScope()));
      case 'and':
        return (this._attributesScope = left.attributesScope().intersect(right.attributesScope()));
    }
    throw new Error('Not implemented');
  }

  is(other: TypeExpressionMetadata): Boolean {
    throw new Error('Not implemented');
  }
}
