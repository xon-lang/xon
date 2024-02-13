/* eslint-disable id-denylist */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Boolean2, Integer, Nothing, Something, String2 } from '../../lib/core';

export interface Type {
  name: String2;
  base: Type | Nothing;
  data: Something | Nothing;
  parameters: Type[];

  is: (type: Type) => Boolean2;
  eq: (type: Type) => Boolean2;
  attributes: () => Record<String2, Type>;
}

export interface AnyType extends Type {}

export interface NumberType extends Type {}

export interface IntegerType extends Type {}

export interface IntegerLiteralType extends Type {
  data: { value: Integer };
}

export interface StringType extends Type {}

export interface StringLiteralType extends Type {
  data: { value: String2 };
}

export interface UnionType extends Type {
  data: { left: Type; right: Type };
}

export const anyType: AnyType = {
  name: 'Any',
  base: Nothing,
  data: Nothing,
  parameters: [],

  is(type): Boolean2 {
    return this.eq(type);
  },

  eq(type): Boolean2 {
    return this === type;
  },

  attributes(): Record<String2, Type> {
    return {};
  },
};

export const numberType: NumberType = {
  name: 'Number',
  base: anyType,
  data: Nothing,
  parameters: [],

  is(type): Boolean2 {
    return (this.eq(type) || this.base?.is(type)) ?? false;
  },

  eq(type): Boolean2 {
    return this === type;
  },

  attributes(): Record<String2, Type> {
    return {};
  },
};

export const integerType: IntegerType = {
  name: 'Integer',
  base: numberType,
  data: Nothing,
  parameters: [],

  is(type): Boolean2 {
    return (this.eq(type) || this.base?.is(type)) ?? false;
  },

  eq(type): Boolean2 {
    return this === type;
  },

  attributes(): Record<String2, Type> {
    return {};
  },
};

export function integerLiteralType(value: Integer): IntegerLiteralType {
  return {
    name: 'Integer',
    base: integerType,
    data: { value },
    parameters: [],

    is(type): Boolean2 {
      return (this.eq(type) || this.base?.is(type)) ?? false;
    },

    eq(type): Boolean2 {
      return this.data === type.data;
    },

    attributes(): Record<String2, Type> {
      return {};
    },
  };
}

export const stringType: StringType = {
  name: 'String',
  base: anyType,
  data: Nothing,
  parameters: [],

  is(type): Boolean2 {
    return (this.eq(type) || this.base?.is(type)) ?? false;
  },

  eq(type): Boolean2 {
    return this === type;
  },

  attributes(): Record<String2, Type> {
    return {
      length: integerType,
    };
  },
};

export function stringLiteralType(value: String2): StringLiteralType {
  return {
    name: 'String',
    base: stringType,
    data: { value },
    parameters: [],

    is(type): Boolean2 {
      return (this.eq(type) || this.base?.is(type)) ?? false;
    },

    eq(type): Boolean2 {
      return this.data === type.data;
    },

    attributes(): Record<String2, Type> {
      return { ...stringType.attributes, length: integerLiteralType(data.length) };
    },
  };
}

export function unionType(left: Type, right: Type): UnionType {
  return {
    name: 'Union',
    base: stringType,
    data: {
      left,
      right,
    },
    parameters: [],

    is(type): Boolean2 {
      return (this.eq(type) || this.base?.is(type)) ?? false;
    },

    eq(type): Boolean2 {
      return (
        eq(this, type) &&
        ((this.data.left.eq(type.data.left) && this.data.right.eq(type.data.right)) ||
          (this.data.left.eq(type.data.right) && this.data.right.eq(type.data.left)))
      );
    },

    attributes(): Record<String2, Type> {
      return {};
    },
  };
}

function eq<T extends Type>(left: T, right: Type): right is T {
  return left.name === right.name;
}
