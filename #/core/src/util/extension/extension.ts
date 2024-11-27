import {Anything, ArrayData, Boolean2, Char, Integer, Nothing, Number2, String2, TextData} from '#/common';

declare global {
  interface Array<T> extends ArrayExtension<T> {}
  interface String extends StringExtension {}
}

interface ArrayExtension<T = Anything> {
  first(predicate?: Predicate<T>): T | Nothing;
  first<V extends T>(predicate?: PredicateTypeSafe<T, V>): V | Nothing;
  last(predicate?: Predicate<T>): T | Nothing;
  last<V extends T>(predicate?: PredicateTypeSafe<T, V>): V | Nothing;

  firstIndex(predicate?: Predicate<T>, startIndex?: Integer): Integer;
  lastIndex(predicate?: Predicate<T>, startIndex?: Integer): Integer;

  removeFirst(): T[];
  removeLast(): T[];

  takeWhile(predicate?: Predicate<T>, startIndex?: Integer, includeConditionItem?: Boolean2): T[];
  take(length: Integer, startIndex?: Integer): T[];

  some(predicate: Predicate<Char>): Boolean2;

  count(predicate?: Predicate<T>): Integer;
  sum(select: Select<T, Number2>): Number2;
  min(select: Select<T, Number2>): T | Nothing;
  max(select: Select<T, Number2>): T | Nothing;
  minMax(select: Select<T, Number2>): {min: T; max: T} | Nothing;

  findMap<V>(predicate: PredicateSelect<T, V>): V | Nothing;
  filterMap<V>(predicate: PredicateSelect<T, V>): V[];

  sortBy(select: (value: T) => Number2, ascending?: Boolean2): T[];
  sortStrings(): T[];

  splitBy(predicate: Predicate<T>): {splitter: T | Nothing; items: T[]}[];
  splitBy<V extends T>(predicate: PredicateTypeSafe<T, V>): {splitter: V | Nothing; items: T[]}[];

  equals(other: T[]): Boolean2;
  toDictionary<Key extends String2 | Number2>(select: Select<T, Key>): Record<Key, T>;
  // todo remove 'toArrayData'
  toArrayData(): ArrayData<T>;
}

interface StringExtension {
  removeFirst(): String2;
  removeLast(): String2;

  take(length: Integer, startIndex?: Integer): String2;
  takeWhile(predicate?: Predicate<Char>, startIndex?: Integer, includeConditionItem?: Boolean2): String2;

  toCharCodes(): Uint8Array;
  isLetter(index: Integer): Boolean2;
  isUpperLetter(index: Integer): Boolean2;
  isLowerLetter(index: Integer): Boolean2;
  isDigit(index: Integer): Boolean2;
  isLetterOrDigit(index: Integer): Boolean2;
  setPadding(padding: Integer): String2;
  equals(other: String2): Boolean2;
  // todo remove 'toArrayData'
  toText(): TextData;
}

export type Predicate<T, V = Boolean2> = (value: T, index: Integer, array: T[]) => V;
export type PredicateTypeSafe<T, V extends T> = (value: T, index: Integer, array: T[]) => value is V;
export type Select<T, V> = (value: T, index: Integer, array: T[]) => V;
export type PredicateSelect<T, V> = (value: T, index: Integer, array: T[]) => V | Nothing;
