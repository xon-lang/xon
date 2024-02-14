import { Anything, Boolean2, Nothing, String2 } from '../../lib/core';
import { AnythingType } from './anything/anything-type';

export interface Type {
  name: String2;
  base: AnythingType | Nothing;
  data: Record<String2, Anything> | Nothing;
  parameters: AnythingType[];
  attributes: Record<String2, AnythingType[]>;

  is: (type: AnythingType) => Boolean2;
  eq: (type: AnythingType) => Boolean2;
}

export function eq<T extends AnythingType>(left: T, right: AnythingType): right is T {
  return left.name === right.name;
}
