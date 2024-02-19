import { Boolean2, Char, Integer, String2 } from '../../lib/core';

declare global {
  // Array
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: unknown): number;
    takeWhile(predicate: (value: T, index: number) => unknown, startIndex?: number): T[];
    firstOrNull(): T | null;
    lastOrNull(): T | null;
    first(): T;
    last(): T;
    removeFirst(): T[];
    removeLast(): T[];
    findLast(predicate: (value: T, index: number, obj: T[]) => unknown): T | null;
    sortStrings(): T[];
    sum(select: (value: T, index: number, obj: T[]) => Integer): Integer;
  }

  // String
  interface String {
    takeWhile(predicate: (value: Char, index: number) => unknown, startIndex?: number): String2;
    margin(delimiter?: String2): String2;
    toCharCodes(): Uint8Array;
    isDigit(index: Integer): Boolean2;
    isLetter(index: Integer): Boolean2;
    isUpperLetter(index: Integer): Boolean2;
    isLowerLetter(index: Integer): Boolean2;
    isDigitOrLetter(index: Integer): Boolean2;
  }
}