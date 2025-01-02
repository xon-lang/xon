import {
  ArrayExtremumElement,
  ArraySplitByModel,
  Boolean2,
  commonPackageType,
  Integer,
  Nothing,
  Number2,
} from '#common';
import {$Model, $Type, Model} from '#typing';

export interface ArrayData<T = unknown> extends Model, Iterable<T> {
  _items: T[];

  [Symbol.iterator](): IterableIterator<T>;

  at(index: Integer): T | Nothing;
  // todo remove 'at2'
  at2(index: Integer): T;
  every(predicate: ArrayPredicate<T>): Boolean2;
  some(predicate?: ArrayPredicate<T> | Nothing): Boolean2;
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): this;
  isEmpty(): Boolean2;

  first(predicate?: ArrayPredicate<T>): T | Nothing;
  first<V extends T>(predicate?: ArraySafePredicate<T, V> | Nothing): V | Nothing;
  last(predicate?: ArrayPredicate<T>): T | Nothing;
  last<V extends T>(predicate?: ArraySafePredicate<T, V> | Nothing): V | Nothing;
  firstLast(): {first: T | Nothing; last: T | Nothing};
  remove(predicate: ArrayPredicate<T>): ArrayData<T> | Nothing;

  firstIndex(predicate?: ArrayPredicate<T> | Nothing, startIndex?: Integer | Nothing): Integer | Nothing;
  firstItemIndex(item: T, startIndex?: Integer | Nothing): Integer | Nothing;
  firstItemsIndex(items: ArrayData<T>, startIndex?: Integer | Nothing): Integer | Nothing;
  lastIndex(predicate?: ArrayPredicate<T> | Nothing, startIndex?: Integer | Nothing): Integer | Nothing;
  lastItemIndex(item: T, startIndex?: Integer | Nothing): Integer | Nothing;
  lastItemsIndex(items: ArrayData<T>, startIndex?: Integer | Nothing): Integer | Nothing;
  firstLastIndex(): {firstIndex: Integer | Nothing; lastIndex: Integer | Nothing};

  filter<V extends T>(predicate: ArraySafePredicate<T, V>): ArrayData<V>;
  filter(predicate: ArrayPredicate<T>): ArrayData<T>;

  map<V>(select: ArraySelect<T, V>): ArrayData<V>;

  hasItem(item: T): Boolean2;
  hasItems(items: ArrayData<T>): Boolean2;

  addFirstItems(items: ArrayData<T>): this;
  addFirstItem(item: T): this;
  addLastItems(items: ArrayData<T>): this;
  addLastItem(item: T): this;
  removeFirst(length?: Integer | Nothing): this;
  removeLast(length?: Integer | Nothing): this;

  takeWhile(predicate?: ArrayPredicate<T>, startIndex?: Integer, includeConditionItem?: Boolean2): this;
  take(length: Integer, startIndex?: Integer): this;

  count(predicate?: ArrayPredicate<T>): Integer;
  sum(select: ArraySelect<T, Number2>): Number2;
  min<V extends Number2>(select: ArraySelect<T, V>): ArrayExtremumElement<T, V> | Nothing;
  max<V extends Number2>(select: ArraySelect<T, V>): ArrayExtremumElement<T, V> | Nothing;
  minMax<V extends Number2>(
    select: ArraySelect<T, V>,
  ): {min: ArrayExtremumElement<T, V> | Nothing; max: ArrayExtremumElement<T, V> | Nothing};

  findMap<V>(predicateSelect: ArrayPredicateSelect<T, V>): V | Nothing;
  filterMap<V extends Model>(predicateSelect: ArrayPredicateSelect<T, V>): ArrayData<V>;

  sortBy(select: (value: T) => Number2, ascending?: Boolean2): this;
  // sortStrings(): ArrayData<T>;
  sort(compareFn?: (a: T, b: T) => number): this;

  flat<A>(this: ArrayData<ArrayData<A>>): ArrayData<A>;
  flatMap<V>(select: ArraySelect<T, ArrayData<V>>): ArrayData<V>;

  // todo uncomment
  // splitBy(predicate: ArrayPredicate<T>): ArrayData<{splitter: T | Nothing; items: ArrayData<T>}>;
  // splitBy<V extends T>(
  //   predicate: ArraySafePredicate<T, V>,
  // ): ArrayData<{splitter: V | Nothing; items: ArrayData<T>}>;

  splitBy<T>(this: ArrayData<T>, predicate: ArrayPredicate<T>): ArrayData<ArraySplitByModel<T>>;
  reduce(select: (previous: T, current: T, index: Integer) => T): T;
  reduce(select: (previous: T, current: T, index: Integer) => T, initialValue: T): T;
  reduce<V>(select: (previous: V, current: T, index: Integer) => V, initialValue: V): V;
  clone(): this;
  equals(other: this): Boolean2;
  toNativeArray(): T[];
}

export type ArrayPredicate<T> = (value: T, index: Integer) => Boolean2;
export type ArraySafePredicate<T, V extends T> = (value: T, index: Integer) => value is V;
export type ArraySelect<T, V> = (value: T, index: Integer) => V;
export type ArrayPredicateSelect<T, V> = ArraySelect<T, V | Nothing>;

export const $ArrayData = <T>($T: $Type = $Model) =>
  commonPackageType<ArrayData<T>>('ArrayData', undefined, [$T]);
