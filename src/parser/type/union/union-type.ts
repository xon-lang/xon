import { Boolean2 } from '../../../lib/core';
import { AnythingType, anythingType } from '../anything/anything-type';
import { eq } from '../type';

export interface UnionType extends AnythingType {
  base: AnythingType;
  data: { left: AnythingType; right: AnythingType };
}

export function unionType(left: AnythingType, right: AnythingType): UnionType {
  return {
    name: 'Union',
    base: anythingType,
    data: {
      left,
      right,
    },
    parameters: [],
    attributes: anythingType.attributes,

    is(type): Boolean2 {
      return this.eq(type);
    },

    eq(type): Boolean2 {
      return (
        eq(this, type) &&
        ((this.data.left.eq(type.data.left) && this.data.right.eq(type.data.right)) ||
          (this.data.left.eq(type.data.right) && this.data.right.eq(type.data.left)))
      );
    },
  };
}

export function unionFromTypes(types: AnythingType[]): UnionType {
  if (types.length < 2) {
    throw new Error('Not implemented');
  }

  return types.slice(2).reduce<UnionType>((u, t) => unionType(u, t), unionType(types[0], types[1]));
}
