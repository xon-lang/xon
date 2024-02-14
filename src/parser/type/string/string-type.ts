import { Boolean2, String2 } from '../../../lib/core';
import { ArrayLiteralType, ArrayType, arrayLiteralType, arrayType } from '../array/array-type';
import { charLiteralType, charType } from '../char/char-type';
import { integerLiteralType } from '../integer/integer-type';
import { eq } from '../type';

export interface StringType extends ArrayType {
  base: ArrayType;
}

export interface StringLiteralType extends ArrayLiteralType {
  base: ArrayLiteralType;
  data: { value: String2 } & ArrayLiteralType['data'];
}

const charArrayType = arrayType(charType);

export const stringType: StringType = {
  name: 'String',
  base: charArrayType,
  data: { itemType: charType },
  parameters: [],
  attributes: charArrayType.attributes,

  is(type): Boolean2 {
    return this === type || this.base.is(type);
  },

  eq(type): Boolean2 {
    return this === type;
  },
};

export function stringLiteralType(value: String2): StringLiteralType {
  const base = arrayLiteralType(Array.from(value).map((c) => charLiteralType(c)));

  return {
    name: 'String',
    base,
    data: { ...base.data, value },
    parameters: [],
    attributes: { ...base.attributes, ...stringType.attributes, length: [integerLiteralType(value.length)] },

    is(type): Boolean2 {
      return this.eq(type) || this.base.is(type);
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.value === type.data.value;
    },
  };
}
