import { Boolean2 } from '../../../lib/core';
import { SomethingType, somethingType } from '../something/something-type';

export interface NumberType extends SomethingType {
  base: SomethingType;
}

export const numberType: NumberType = {
  name: 'Number',
  base: somethingType,
  data: somethingType.data,
  parameters: [],
  attributes: somethingType.attributes,

  is(type): Boolean2 {
    return this === type || this.base.is(type);
  },

  eq(type): Boolean2 {
    return this === type;
  },
};
