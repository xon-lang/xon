import {Anything, Boolean2, Integer, Nothing, Number2, String2} from '#common';

declare global {
  interface Array<T> extends ArrayExtension<T> {}
}

interface ArrayExtension<T = Anything> {
  filterMap<V>(predicate: PredicateSelect<T, V>): V[];

  sortBy(select: (value: T) => Number2, ascending?: Boolean2): T[];
  sortStrings(): T[];

  equals(other: T[]): Boolean2;
  toDictionary<Key extends String2 | Number2>(select: Select<T, Key>): Record<Key, T>;
}

export type Predicate<T, V = Boolean2> = (value: T, index: Integer, array: T[]) => V;
export type PredicateTypeSafe<T, V extends T> = (value: T, index: Integer, array: T[]) => value is V;
export type Select<T, V> = (value: T, index: Integer, array: T[]) => V;
export type PredicateSelect<T, V> = (value: T, index: Integer, array: T[]) => V | Nothing;
