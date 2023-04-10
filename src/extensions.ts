import { Char, String2 } from '~/lib/core';

Array.prototype.takeWhile = function takeWhile<T>(
  predicate: (value: T, index: number) => unknown,
  startIndex = 0,
): T[] {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }
  return this.slice(startIndex, this.length);
};

Array.prototype.first = function first<T>(): T {
  return this[0] ?? null;
};

Array.prototype.last = function last<T>(): T {
  return this[this.length - 1] ?? null;
};

String.prototype.takeWhile = function takeWhile(
  predicate: (value: Char, index: number) => unknown,
  startIndex = 0,
): String2 {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }
  return this.slice(startIndex, this.length);
};
