import { Boolean2 } from '../../../lib/core';
import { anythingType } from '../core';
import { Type, eq } from '../type';

export interface UnionType extends Type {
  data: { left: Type; right: Type };
}

export function unionType(left: Type, right: Type): UnionType {
  return {
    name: 'Union',
    base: anythingType(),
    data: {
      left,
      right,
    },
    parameters: [],
    attributes: anythingType().attributes,

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

export function unionFromTypes(types: Type[]): UnionType {
  if (types.length < 2) {
    throw new Error('Not implemented');
  }

  return types.slice(2).reduce<UnionType>((u, t) => unionType(u, t), unionType(types[0], types[1]));
}
