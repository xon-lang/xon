import { Boolean2 } from '../../../lib/core';
import { AnythingType, anythingType } from '../anything/anything-type';

export interface NothingType extends AnythingType {
  base: AnythingType;
}

export const nothingType: NothingType = {
  name: 'Nothing',
  base: anythingType,
  data: anythingType.data,
  parameters: [],
  attributes: anythingType.attributes,

  is(type): Boolean2 {
    return this === type;
  },

  eq(type): Boolean2 {
    return this === type;
  },
};
