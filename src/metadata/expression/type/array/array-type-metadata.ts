import { Boolean } from '../../../../lib/core';
import { DefinitionMetadata } from '../../../declaration/definition/definition-metadata';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { TypeMetadata } from '../type-metadata';

export class ArrayTypeMetadata extends TypeMetadata {
  private _attributesScope: DeclarationScope;

  constructor(
    public commonType: TypeMetadata,
    public items: TypeMetadata[],
    public definition: DefinitionMetadata,
  ) {
    super();
  }

  attributesScope(): DeclarationScope {
    return this.definition.attributesScope();

    // if (this._attributesScope) {
    //   return this._attributesScope;
    // }

    // const commonType = this.commonType;
    // const items = this.items();

    // if (index !== undefined && items.length) {
    //   if (index >= items.length) {
    //     throw new Error('Not implemented');
    //   }
    //   return (this._attributesScope = items[index].attributesScope());
    // }
    // return commonType.attributesScope();
  }

  is(other: TypeMetadata): Boolean {
    throw new Error('Not implemented');
  }

  equals(other: TypeMetadata): Boolean {
    if (other instanceof ArrayTypeMetadata) {
      const currentItems = this.items;
      const otherItems = other.items;

      if (currentItems.length && otherItems.length && currentItems.length === otherItems.length) {
        return currentItems.every((x, i) => x.equals(otherItems[i]));
      }

      return this.commonType.equals(other.commonType);
    }
    return false;
  }
}
