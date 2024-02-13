import { Boolean2, Integer, String2, Unknown2 } from '../../lib/core';

export interface Type {
  name: String2;
  base: Type | null;
  literalValue: Unknown2 | null ;
  parameters: Type[];
  attributes: Attribute[];

  is: (type: Type) => Boolean2;
  eq: (type: Type) => Boolean2;
}

export interface Attribute {
  name: String2;
  type: Type;
}

export function numberType(): Type {
  return {
    name: 'Integer',
    base: null,
    literalValue: null
  }
}

export function integerType(literalValue: Integer | null): Type {
  return {
    name: 'Integer',
    base: 
  }
}

export const StringType: Type = {
  name: 'String',
  isIndexer: false,
  isInvoke: false,
  attributes: [
    {
      name: 'length',
      attributes: [],
    },
  ],
};
