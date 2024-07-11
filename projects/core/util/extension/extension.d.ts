import {Anything, Array2, Boolean2, Char, Integer, Nothing, Number2, String2} from '../../../lib/types';

declare global {
  interface Array<T> extends ArrayExtension<T> {}
  interface String extends StringExtension {}
}

export interface ArrayExtension<T = Anything> {
  first(predicate?: Predicate<T>): T | Nothing;
  first<V extends T>(predicate?: PredicateTypeSafe<T, V>): V | Nothing;
  last(predicate?: Predicate<T>): T | Nothing;
  last<V extends T>(predicate?: PredicateTypeSafe<T, V>): V | Nothing;

  firstIndex(predicate?: Predicate<T>): Integer;
  lastIndex(predicate?: Predicate<T>): Integer;

  removeFirst(): Array2<T>;
  removeLast(): Array2<T>;

  takeWhile(predicate?: Predicate<T>, startIndex?: Integer, includeConditionItem?: Boolean2): Array2<T>;
  take(length: Integer, startIndex: Integer): Array2<T>;

  some(predicate: Predicate<Char>): Boolean2;

  sum(select: Select<T, Number2>): Number2;
  count(predicate?: Predicate<T>): Integer;

  findMap<V>(predicate: PredicateSelect<T, V>): V | Nothing;
  filterMap<V>(predicate: PredicateSelect<T, V>): Array2<V>;

  sortBy(select: (value: T) => Number2, ascending?: Boolean2): Array2<T>;
  sortStrings(): Array2<T>;

  splitBy(predicate: Predicate<T>): Array2<{splitter: T | Nothing; items: Array2<T>}>;
  splitBy<V extends T>(predicate: PredicateTypeSafe<T, V>): Array2<{splitter: V | Nothing; items: Array2<T>}>;
}

export interface StringExtension extends ArrayExtension<Char> {
  removeFirst(): String2;
  removeLast(): String2;

  take(length: Integer, startIndex: Integer): String2;
  takeWhile(predicate?: Predicate<T>, startIndex?: Integer, includeConditionItem?: Boolean2): String2;

  toCharCodes(): Uint8Array;
  isLetter(index: Integer): Boolean2;
  isUpperLetter(index: Integer): Boolean2;
  isLowerLetter(index: Integer): Boolean2;
  isDigit(index: Integer): Boolean2;
  isLetterOrDigit(index: Integer): Boolean2;
  setPadding(padding: Integer): String2;
}

export type Predicate<T, V = Boolean2> = (value: T, index: Integer, array: Array2<T>) => V;
export type PredicateTypeSafe<T, V> = (value: T, index: Integer, array: Array2<T>) => value is V;
export type Select<T, V> = (value: T, index: Integer, array: Array2<T>) => V;
export type PredicateSelect<T, V> = (value: T, index: Integer, array: Array2<T>) => V | Nothing;
