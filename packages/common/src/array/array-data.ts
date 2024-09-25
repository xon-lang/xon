import {Anything, Boolean2, Integer, Nothing, Number2, String2} from '#common';

export interface ArrayData<T = Anything>  {
  _array: T[];
  get length(): Integer;
  at(index: Integer): T | Nothing;
  at2(index: Integer): T;
  push(...items: T[]): void;
  every(predicate: ArrayPredicate<T>): Boolean2;
  some(predicate: ArrayPredicate<T>): Boolean2;
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): this;

  first(predicate?: ArrayPredicate<T>): T | Nothing;
  first<V extends T>(predicate?: ArraySafePredicate<T, V>): V | Nothing;
  last(predicate?: ArrayPredicate<T>): T | Nothing;
  last<V extends T>(predicate?: ArraySafePredicate<T, V>): V | Nothing;

  firstIndex(predicate?: ArrayPredicate<T>, startIndex?: Integer): Integer;
  lastIndex(predicate?: ArrayPredicate<T>, startIndex?: Integer): Integer;

  removeFirst(): this;
  removeLast(): this;

  takeWhile(
    predicate?: ArrayPredicate<T>,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): this;
  take(length: Integer, startIndex?: Integer): this;

  count(predicate?: ArrayPredicate<T>): Integer;
  sum(select: ArraySelect<T, Number2>): Number2;
  min(select: ArraySelect<T, Number2>): T | Nothing;
  max(select: ArraySelect<T, Number2>): T | Nothing;
  minMax(select: ArraySelect<T, Number2>): {min: T; max: T} | Nothing;

  findMap<V>(predicateSelect: ArrayPredicateSelect<T, V>): V | Nothing;
  filterMap<V>(predicateSelect: ArrayPredicateSelect<T, V>): ArrayData<V>;

  sortBy(select: (value: T) => Number2, ascending?: Boolean2): this;
  // sortStrings(): ArrayData<T>;

  splitBy(predicate: ArrayPredicate<T>): ArrayData<{splitter: T | Nothing; items: ArrayData<T>}>;
  splitBy<V extends T>(
    predicate: ArraySafePredicate<T, V>,
  ): ArrayData<{splitter: V | Nothing; items: ArrayData<T>}>;

  equals(other: this): Boolean2;
  toDictionary<Key extends String2 | Number2>(select: ArraySelect<T, Key>): Record<Key, T>;
};

export type ArrayPredicate<T, V = Boolean2> = (value: T, index: Integer, array: ArrayData<T>) => V;
export type ArraySafePredicate<T, V extends T> = (
  value: T,
  index: Integer,
  array: ArrayData<T>,
) => value is V;
export type ArraySelect<T, V> = (value: T, index: Integer, array: ArrayData<T>) => V;
export type ArrayPredicateSelect<T, V> = (value: T, index: Integer, array: ArrayData<T>) => V | Nothing;
