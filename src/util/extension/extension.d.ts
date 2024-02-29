import {Boolean2, Char, Integer, Nothing, Something, String2} from '../../lib/core';

declare global {
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: Integer, obj: T[]) => Boolean2, thisArg?: Something): Integer;
    takeWhile(predicate: (value: T, index: Integer) => Boolean2, startIndex?: Integer): T[];
    firstOrNull(): T | Nothing;
    lastOrNull(): T | Nothing;
    first(): T;
    last(): T;
    removeFirst(): T[];
    removeLast(): T[];
    findLast(predicate: (value: T, index: Integer, obj: T[]) => Boolean2): T | Nothing;
    sortStrings(): T[];
    sum(select: (value: T, index: Integer, obj: T[]) => Integer): Integer;
    findMap<V>(predicate: (value: T, index: Integer, obj: T[]) => V | Nothing): V | Nothing;
  }

  interface String {
    takeWhile(predicate: (value: Char, index: Integer) => Boolean2, startIndex?: Integer): String2;
    take(length: Integer, index: Integer): String2;
    margin(delimiter?: String2): String2;
    toCharCodes(): Uint8Array;
    isLetter(index: Integer): Boolean2;
    isUpperLetter(index: Integer): Boolean2;
    isLowerLetter(index: Integer): Boolean2;
    isDigit(index: Integer): Boolean2;
    isLetterOrDigit(index: Integer): Boolean2;
    some(predicate: (value: Char, index: Integer, array: Char[]) => Boolean2): Boolean2;
  }
}
