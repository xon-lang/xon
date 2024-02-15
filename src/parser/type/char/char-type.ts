import { Boolean2, Char } from '../../../lib/core';
import { charType } from '../core';
import { IntegerLiteralType, integerLiteralType } from '../integer/integer-type';
import { Type, eq } from '../type';

export interface CharLiteralType extends Type {
  data: { value: Char };
  attributes: {
    code: [IntegerLiteralType];
  };
}

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
      return (this.eq(type) || this.base?.is(type)) ?? false;
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.value === type.data.value;
    },
  };
}
