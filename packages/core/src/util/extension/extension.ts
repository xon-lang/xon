import {Anything, Boolean2, Integer, Nothing, Number2, String2, Text} from '#common';

declare global {
  interface Array<T> extends ArrayExtension<T> {}
}

interface ArrayExtension<T = Anything> {
  last(predicate?: Predicate<T>): T | Nothing;
  last<V extends T>(predicate?: PredicateTypeSafe<T, V>): V | Nothing;

  firstIndex(predicate?: Predicate<T>, startIndex?: Integer): Integer;
  lastIndex(predicate?: Predicate<T>, startIndex?: Integer): Integer;

  removeFirst(): T[];
  removeLast(): T[];

  takeWhile(predicate?: Predicate<T>, startIndex?: Integer, includeConditionItem?: Boolean2): T[];
  take(length: Integer, startIndex?: Integer): T[];

  some(predicate: Predicate<string>): Boolean2;

  count(predicate?: Predicate<T>): Integer;
  sum(select: Select<T, Number2>): Number2;
  min(select: Select<T, Number2>): T | Nothing;
  max(select: Select<T, Number2>): T | Nothing;
  minMax(select: Select<T, Number2>): {min: T; max: T} | Nothing;

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
