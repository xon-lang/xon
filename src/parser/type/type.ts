import { Anything, Boolean2, Nothing, String2 } from '../../lib/core';

export interface Type {
  name: String2;
  base: Type | Nothing;
  data: Record<String2, Anything> | Nothing;
  parameters: Type[];
  attributes: Record<String2, Type[]>;

  is: (type: Type) => Boolean2;
  eq: (type: Type) => Boolean2;
}

export function eq<T extends Type>(left: T, right: Type): right is T {
  return left.name === right.name;
}
