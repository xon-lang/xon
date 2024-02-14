import { Boolean2, nothing } from '../../../lib/core';
import { Type } from '../type';

export interface AnythingType extends Type {}

export const anythingType: AnythingType = {
  name: 'Anything',
  base: nothing,
  data: nothing,
  parameters: [],
  attributes: {},

  is(type): Boolean2 {
    return this === type;
  },

  eq(type): Boolean2 {
    return this === type;
  },
};
