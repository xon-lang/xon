import { Boolean2, Integer } from '../../../lib/core';
import { integerType } from '../core';
import { Type, eq } from '../type';

export interface IntegerLiteralType extends Type {
  data: { value: Integer };
}

export function integerLiteralType(value: Integer): IntegerLiteralType {
  return {
    name: 'Integer',
    base: integerType(),
    data: { ...integerType().data, value },
    parameters: [],
    attributes: integerType().attributes,

    is(type): Boolean2 {
      return (this.eq(type) || this.base?.is(type)) ?? false;
    },

    eq(type): Boolean2 {
      return eq(this, type) && this.data.value === type.data.value;
    },
  };
}
