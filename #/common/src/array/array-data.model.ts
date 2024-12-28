import {Anything_V2, Boolean2, commonPackageType, Integer, Nothing, Number2, String2} from '#common';
import {$Model, $Type, Model} from '#typing';

export interface ArrayData<T extends Anything_V2 = Anything_V2> extends Model, Iterable<T> {
  _items: T[];

  [Symbol.iterator](): IterableIterator<T>;

  length(): Integer;
  at(index: Integer): T | Nothing;
  // todo remove 'at2'
  at2(index: Integer): T;
  every(predicate: ArrayPredicate<T>): Boolean2;
  // todo rename 'some' to has
  some(predicate: ArrayPredicate<T>): Boolean2;
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): this;

  first(predicate?: ArrayPredicate<T>): T | Nothing;
  first<V extends T>(predicate?: ArraySafePredicate<T, V> | Nothing): V | Nothing;
  last(predicate?: ArrayPredicate<T>): T | Nothing;
  last<V extends T>(predicate?: ArraySafePredicate<T, V> | Nothing): V | Nothing;

  firstIndex(predicate?: ArrayPredicate<T> | Nothing, startIndex?: Integer | Nothing): Integer;
  firstItemIndex(item: T, startIndex?: Integer | Nothing): Integer;
  firstItemsIndex(items: ArrayData<T>, startIndex?: Integer | Nothing): Integer;
  lastIndex(predicate?: ArrayPredicate<T> | Nothing, startIndex?: Integer | Nothing): Integer;
  lastItemIndex(item: T, startIndex?: Integer | Nothing): Integer;
  lastItemsIndex(items: ArrayData<T>, startIndex?: Integer | Nothing): Integer;

  filter<V extends T>(predicate: ArraySafePredicate<T, V>): ArrayData<V>;
  filter(predicate: ArrayPredicate<T>): ArrayData<T>;

  map<V extends Anything_V2>(select: ArraySelect<T, V>): ArrayData<V>;

  hasItem(item: T): Boolean2;
  hasItems(items: ArrayData<T>): Boolean2;

  addFirst(...items: T[]): this;
  addLast(...items: T[]): this;
  removeFirst(length?: Integer | Nothing): this;
  removeLast(length?: Integer | Nothing): this;

  takeWhile(predicate?: ArrayPredicate<T>, startIndex?: Integer, includeConditionItem?: Boolean2): this;
  take(length: Integer, startIndex?: Integer): this;

  count(predicate?: ArrayPredicate<T>): Integer;
  sum(select: ArraySelect<T, Number2>): Number2;
  min(select: ArraySelect<T, Number2>): T | Nothing;
  max(select: ArraySelect<T, Number2>): T | Nothing;
  minMax(select: ArraySelect<T, Number2>): {min: T; max: T} | Nothing;

  findMap<V>(predicateSelect: ArrayPredicateSelect<T, V>): V | Nothing;
  filterMap<V extends Model>(predicateSelect: ArrayPredicateSelect<T, V>): ArrayData<V>;

  sortBy(select: (value: T) => Number2, ascending?: Boolean2): this;
  // sortStrings(): ArrayData<T>;
  sort(compareFn?: (a: T, b: T) => number): this;

  flat<A extends Anything_V2>(this: ArrayData<ArrayData<A>>): ArrayData<A>;
  flatMap<V extends Anything_V2>(select: ArraySelect<T, V>): ArrayData<V>;

  // todo uncomment
  // splitBy(predicate: ArrayPredicate<T>): ArrayData<{splitter: T | Nothing; items: ArrayData<T>}>;
  // splitBy<V extends T>(
  //   predicate: ArraySafePredicate<T, V>,
  // ): ArrayData<{splitter: V | Nothing; items: ArrayData<T>}>;

  reduce(select: (previous: T, current: T, index: Integer) => T): T;
  reduce(select: (previous: T, current: T, index: Integer) => T, initialValue: T): T;
  reduce<V>(select: (previous: V, current: T, index: Integer) => V, initialValue: V): V;
  clone(): this;
  equals(other: this): Boolean2;
  toNativeArray(): T[];
  toString(separator?: String2 | Nothing): String2;
}

export type ArrayPredicate<T> = (value: T, index: Integer) => Boolean2;
export type ArraySafePredicate<T, V extends T> = (value: T, index: Integer) => value is V;
export type ArraySelect<T, V> = (value: T, index: Integer) => V;
export type ArrayPredicateSelect<T, V> = ArraySelect<T, V | Nothing>;

export const $ArrayData = <T extends Anything_V2>($T: $Type = $Model) =>
  commonPackageType<ArrayData<T>>('ArrayData', null, [$T]);
