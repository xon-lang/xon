import { Boolean2 } from '../../../lib/core';
import { coreType } from '../core';
import { integerLiteralType } from '../integer/integer-type';
import { Type, eq } from '../type';
import { unionFromTypes } from '../union/union-type';

export interface ArrayType extends Type {
  data: { itemType: Type };
  attributes: {
    length: [Type];
  };
}

export interface ArrayLiteralType extends ArrayType {
  base: ArrayType;
  data: { items: Type[] } & ArrayType['data'];
}

export function arrayType(itemType: Type): ArrayType {
  return {
    name: 'Char',
    base: coreType('Something'),
    data: { itemType },
    parameters: [],
    attributes: {
      ...coreType('Something').attributes,
      length: [coreType('Integer')],
    },

    is(type): Boolean2 {
      return (eq(this, type) && (this.data.itemType.is(type.data.itemType) || this.base?.is(type))) ?? false;
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.itemType.eq(type.data.itemType);
    },
  };
}

export function arrayLiteralType(items: Type[]): ArrayLiteralType {
  const base = itemsType(items);

  return {
    name: 'ArrayLiteral',
    base,
    data: { itemType: itemsType(items), items },
    parameters: [],
    attributes: {
      ...base.attributes,
      length: [integerLiteralType(items.length)],
    },

    is(type): Boolean2 {
      return (
        eq(this, type) &&
        this.data.items.length === type.data.items.length &&
        this.data.items.every((x, i) => x.is(type.data.items[i]))
      );
    },

    eq(type): Boolean2 {
      return (
        eq(this, type) &&
        this.data.items.length === type.data.items.length &&
        this.data.items.every((x, i) => x.eq(type.data.items[i]))
      );
    },
  };
}

function itemsType(items: Type[]): ArrayType {
  if (items.length === 0) {
    return arrayType(coreType('Nothing'));
  }

  if (items.length === 1) {
    return arrayType(items[0]);
  }

  return arrayType(unionFromTypes(items));
}
