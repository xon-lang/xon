import { Boolean2, String2 } from '../../lib/core';

export interface Type {
  name: String2;
  isIndexer: Boolean2;
  isInvoke: Boolean2;
  attributes: Type[];
}

export const StringType: Type = {
  name: 'String',
  isIndexer: false,
  isInvoke: false,
  attributes: [
    {
      name: 'length',
      isIndexer: false,
      isInvoke: false,
      attributes: [],
    },
  ],
};
