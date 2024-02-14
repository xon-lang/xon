import { Boolean2, Integer } from '../../../lib/core';
import { NumberType, numberType } from '../number/number-type';
import { eq } from '../type';

export interface IntegerType extends NumberType {
  base: NumberType;
}

export interface IntegerLiteralType extends IntegerType {
  base: IntegerType;
  data: { value: Integer };
}

export const integerType: IntegerType = {
  name: 'Integer',
  base: numberType,
  data: numberType.data,
  parameters: [],
  attributes: numberType.attributes,

  is(type): Boolean2 {
    return this === type || this.base.is(type);
  },

  eq(type): Boolean2 {
    return this === type;
  },
};

export function integerLiteralType(value: Integer): IntegerLiteralType {
  return {
    name: 'Integer',
    base: integerType,
    data: { ...integerType.data, value },
    parameters: [],
    attributes: integerType.attributes,

    is(type): Boolean2 {
      return this.eq(type) || this.base.is(type);
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.value === type.data.value;
    },
  };
}
