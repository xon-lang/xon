import { Number2, String2 } from '../../lib/core';

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

Array.prototype.findLast = function <T>(predicate: (value: T, index: number, obj: T[]) => unknown): T | null {
  const index = this.findLastIndex(predicate);

  if (index < 0) {
    return null;
  }

  return this[index] ?? null;
};

Array.prototype.firstOrNull = function <T>(): T | null {
  return this[0] ?? null;
};

Array.prototype.lastOrNull = function <T>(): T | null {
  return this[this.length - 1] ?? null;
};

Array.prototype.first = function <T>(): T {
  return this[0];
};

Array.prototype.last = function <T>(): T {
  return this[this.length - 1];
};

Array.prototype.removeFirst = function <T>(): T[] {
  this.splice(0, 1);

  return this;
};

Array.prototype.removeLast = function <T>(): T[] {
  this.splice(-1, 1);

  return this;
};

Array.prototype.sortStrings = function(): String2[] {
  return (this as String2[]).sort((a, b) => a.localeCompare(b));
};

Array.prototype.sum = function <T>(select: (value: T, index: number, obj: T[]) => Number2): Number2 {
  return this.reduce((sum, val, index, array) => sum + select(val, index, array), 0);
};

