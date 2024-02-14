import { Boolean2, Char } from '../../../lib/core';
import { IntegerLiteralType, IntegerType, integerLiteralType, integerType } from '../integer/integer-type';
import { SomethingType, somethingType } from '../something/something-type';
import { eq } from '../type';

export interface CharType extends SomethingType {
  base: SomethingType;
  attributes: {
    code: [IntegerType];
  };
}

export interface CharLiteralType extends CharType {
  base: CharType;
  data: { value: Char };
  attributes: {
    code: [IntegerLiteralType];
  };
}

export const charType: CharType = {
  name: 'Char',
  base: somethingType,
  data: somethingType.data,
  parameters: [],
  attributes: {
    ...somethingType.attributes,
    code: [integerType],
  },

  is(type): Boolean2 {
    return this === type || this.base.is(type);
  },

  eq(type): Boolean2 {
    return this === type;
  },
};

export function charLiteralType(value: Char): CharLiteralType {
  return {
    name: 'Char',
    base: charType,
    data: { value },
    parameters: [],
    attributes: {
      ...charType.attributes,
      code: [integerLiteralType(value.charCodeAt(0))],
    },

    is(type): Boolean2 {
      return this.eq(type) || this.base.is(type);
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.value === type.data.value;
    },
  };
}
