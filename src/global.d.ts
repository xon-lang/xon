import { Char, String2 } from '~/lib/core';


declare global {
  // Array
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    takeWhile(predicate: (value: T, index: number) => unknown, startIndex?: number): T[];
    firstOrNull(): T | null;
    lastOrNull(): T | null;
    first(): T;
    last(): T;
    removeFirst(): T[];
    removeLast(): T[];
    findLast(predicate: (value: T, index: number, obj: T[]) => unknown): T | null;
  }

  // String
  interface String {
    takeWhile(predicate: (value: Char, index: number) => unknown, startIndex?: number): String2;
    margin(delimiter?: String2): String2;
  }
}
