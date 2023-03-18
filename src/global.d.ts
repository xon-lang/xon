// todo move all code to extensions.ts

export {};

declare global {
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    takeWhile(predicate: (value: T, index: number) => unknown, startIndex?: number): T[];
  }
}
