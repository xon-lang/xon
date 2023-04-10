import { Char, String2 } from '~/lib/core';

export {};

declare global {
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    takeWhile(predicate: (value: T, index: number) => unknown, startIndex?: number): T[];
    first(): T | null;
    last(): T | null;
  }
  interface String {
    takeWhile(predicate: (value: Char, index: number) => unknown, startIndex?: number): String2;
  }
}
