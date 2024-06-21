import {Array2, Boolean2, Char, Integer, Nothing, String2} from '../../../lib/types';

declare global {
  interface Array<T> {
    first(predicate?: IteratorPredicate<T>): T | Nothing;
    first<S extends T>(predicate?: (value: T, index?: Integer, array?: Array2<T>) => value is S): S | Nothing;
    firstIndex(predicate: IteratorPredicate<T>): Integer;
    removeFirst(): Array2<T>;

    last(predicate?: IteratorPredicate<T>): T | Nothing;
    last<S extends T>(predicate?: (value: T, index?: Integer, array?: Array2<T>) => value is S): S | Nothing;
    lastIndex(predicate: IteratorPredicate<T>): Integer;
    removeLast(): Array2<T>;

    takeWhile(predicate: IteratorPredicate<T>, startIndex?: Integer): Array2<T>;
    sortStrings(): Array2<T>;
    sum(select: (value: T, index?: Integer, array?: Array2<T>) => Integer): Integer;
    findMap<V>(predicate: IteratorPredicate<T, Array2<T>, V | Nothing>): V | Nothing;
    filterMap<V>(predicate: IteratorPredicate<T, Array2<T>, V | Nothing>): Array2<V>;
    count(predicate: IteratorPredicate<T>): Integer;
    sortBy(select: (value: T) => Integer, ascending?: Boolean2): Array2<T>;

    splitBy(predicate: IteratorPredicate<T>): Array2<{splitter: T | Nothing; items: Array2<T>}>;
    splitBy<S extends T>(
      predicate: (value: T, index?: Integer, array?: Array2<T>) => value is S,
    ): Array2<{splitter: S | Nothing; items: Array2<T>}>;
  }

  interface String {
    first(predicate?: (value: Char, index?: Integer, array?: String2) => Boolean2): Char | Nothing;
    last(predicate?: (value: Char, index?: Integer, array?: String2) => Boolean2): Char | Nothing;
    takeWhile(predicate: IteratorPredicate<Char, String2>, startIndex?: Integer): String2;
    take(length: Integer, index: Integer): String2;
    toCharCodes(): Uint8Array;
    isLetter(index: Integer): Boolean2;
    isUpperLetter(index: Integer): Boolean2;
    isLowerLetter(index: Integer): Boolean2;
    isDigit(index: Integer): Boolean2;
    isLetterOrDigit(index: Integer): Boolean2;
    some(predicate: IteratorPredicate<Char, String2>): Boolean2;
    count(predicate: IteratorPredicate<Char, String2>): Integer;
    setPadding(padding: Integer): String2;
  }
}

export type IteratorPredicate<T, U = Array2<T>, V = Boolean2> = (value: T, index: Integer, array: U) => V;
