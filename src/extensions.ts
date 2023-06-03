import { Char, String2 } from '~/lib/core';

// Array
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

Array.prototype.findLast = function findLast<T>(predicate: (value: T, index: number, obj: T[]) => unknown): T | null {
  const index = this.findLastIndex(predicate);

  if (index < 0) {
    return null;
  }

  return this[index];
};

Array.prototype.firstOrNull = function first<T>(): T | null {
  return this[0] ?? null;
};

Array.prototype.lastOrNull = function last<T>(): T | null {
  return this[this.length - 1] ?? null;
};

Array.prototype.first = function first<T>(): T {
  return this[0];
};

Array.prototype.last = function last<T>(): T {
  return this[this.length - 1];
};

// String
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

String.prototype.margin = function margin(delimiter?: String2): String2 {
  throw new Error('Not implemented');
};
