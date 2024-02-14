import { Boolean2 } from '../../../lib/core';
import { AnythingType, anythingType } from '../anything/anything-type';

export interface SomethingType extends AnythingType {
  base: AnythingType;
}

export const somethingType: SomethingType = {
  name: 'Something',
  base: anythingType,
  data: anythingType.data,
  parameters: [],
  attributes: anythingType.attributes,

  is(type): Boolean2 {
    return this === type || this.base.is(type);
  },

  eq(type): Boolean2 {
    return this === type;
  },
};
