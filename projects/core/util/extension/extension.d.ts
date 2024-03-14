import {Boolean2, Char, Integer, Nothing, Something, String2} from '../../lib/core';

declare global {
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: Integer, array: T[]) => Boolean2, thisArg?: Something): Integer;
    takeWhile(predicate: (value: T, index: Integer) => Boolean2, startIndex?: Integer): T[];
    first(predicate?: (value: T, index: Integer, array: T[]) => Boolean2): T | Nothing;
    last(predicate?: (value: T, index: Integer, array: T[]) => Boolean2): T | Nothing;
    removeFirst(): T[];
    removeLast(): T[];
    findLast(predicate: (value: T, index: Integer, array: T[]) => Boolean2): T | Nothing;
    sortStrings(): T[];
    sum(select: (value: T, index: Integer, array: T[]) => Integer): Integer;
    findMap<V>(predicate: (value: T, index: Integer, array: T[]) => V | Nothing): V | Nothing;
    count(predicate: (value: T, index: Integer, array: T[]) => Boolean2): Integer;
    sortBy(select: (value: T) => Integer, ascending?: Boolean2): T[];
    splitBy(predicate: (value: T, index: Integer, array: T[]) => Boolean2): {splitter: T | Nothing; items: T[]}[];
  }

  interface String {
    takeWhile(predicate: (value: Char, index: Integer) => Boolean2, startIndex?: Integer): String2;
    take(length: Integer, index: Integer): String2;
    toCharCodes(): Uint8Array;
    isLetter(index: Integer): Boolean2;
    isUpperLetter(index: Integer): Boolean2;
    isLowerLetter(index: Integer): Boolean2;
    isDigit(index: Integer): Boolean2;
    isLetterOrDigit(index: Integer): Boolean2;
    some(predicate: (value: Char, index: Integer, array: Char[]) => Boolean2): Boolean2;
    count(predicate: (value: Char, index: Integer, array: Char[]) => Boolean2): Integer;
    sum(select: (value: Char, index: Integer, array: Char[]) => Integer): Integer;
    first(predicate?: (value: Char, index: Integer, array: String) => Boolean2): Char | Nothing;
    last(predicate?: (value: Char, index: Integer, array: String) => Boolean2): Char | Nothing;
  }
}
