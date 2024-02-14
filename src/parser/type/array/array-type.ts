import { Boolean2 } from '../../../lib/core';
import { AnythingType } from '../anything/anything-type';
import { IntegerType, integerLiteralType, integerType } from '../integer/integer-type';
import { nothingType } from '../nothing/nothing-type';
import { SomethingType, somethingType } from '../something/something-type';
import { eq } from '../type';
import { unionFromTypes } from '../union/union-type';

export interface ArrayType extends SomethingType {
  base: SomethingType;
  data: { itemType: AnythingType };
  attributes: {
    length: [IntegerType];
  };
}

export interface ArrayLiteralType extends ArrayType {
  base: ArrayType;
  data: { items: AnythingType[] } & ArrayType['data'];
}

export function arrayType(itemType: AnythingType): ArrayType {
  return {
    name: 'Char',
    base: somethingType,
    data: { itemType },
    parameters: [],
    attributes: {
      ...somethingType.attributes,
      length: [integerType],
    },

    is(type): Boolean2 {
      return eq(this, type) && (this.data.itemType.is(type.data.itemType) || this.base.is(type));
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.itemType.eq(type.data.itemType);
    },
  };
}

export function arrayLiteralType(items: AnythingType[]): ArrayLiteralType {
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

function itemsType(items: AnythingType[]): ArrayType {
  if (items.length === 0) {
    return arrayType(nothingType);
  }

  if (items.length === 1) {
    return arrayType(items[0]);
  }

  return arrayType(unionFromTypes(items));
}
