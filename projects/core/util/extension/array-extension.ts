import {Array2, Boolean2, Integer, Nothing, Number2, String2, nothing} from '../../../lib/types';

Array.prototype.take = function <T>(length: Integer, startIndex: Integer = 0): Array2<T> {
  return this.slice(startIndex, startIndex + length);
};

Array.prototype.takeWhile = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
  startIndex = 0,
  includeConditionItem = false,
): Array2<T> {
  if (!predicate) {
    return this.slice(startIndex);
  }

  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i, this)) {
      return this.slice(startIndex, includeConditionItem ? i + 1 : i);
    }
  }

  return this.slice(startIndex, this.length);
};

Array.prototype.first = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): T | Nothing {
  if (this.length === 0) {
    return nothing;
  }

  if (!predicate) {
    return this[0];
  }

  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    if (predicate(element, index, this)) {
      return element;
    }
  }

  return nothing;
};

Array.prototype.firstIndex = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): Integer {
  if (this.length === 0) {
    return -1;
  }

  if (!predicate) {
    return 0;
  }

  for (let index = 0; index < this.length; index++) {
    if (predicate(this[index], index, this)) {
      return index;
    }
  }

  return -1;
};

Array.prototype.last = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): T | Nothing {
  if (this.length === 0) {
    return nothing;
  }

  if (!predicate) {
    return this[this.length - 1];
  }

  for (let index = this.length - 1; index >= 0; index--) {
    const element = this[index];

    if (predicate(element, index, this)) {
      return element;
    }
  }

  return nothing;
};

Array.prototype.lastIndex = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): Integer {
  if (this.length === 0) {
    return -1;
  }

  if (!predicate) {
    return this.length - 1;
  }

  for (let index = this.length - 1; index >= 0; index--) {
    if (predicate(this[index], index, this)) {
      return index;
    }
  }

  return -1;
};

Array.prototype.removeFirst = function <T>(): Array2<T> {
  this.splice(0, 1);

  return this;
};

Array.prototype.removeLast = function <T>(): Array2<T> {
  this.splice(-1, 1);

  return this;
};

Array.prototype.sortStrings = function (): Array2<String2> {
  // todo fix 'as Array2<String2>'
  return (this as Array2<String2>).sort((a, b) => a.localeCompare(b));
};

Array.prototype.sum = function <T>(select: (value: T, index: Integer, array: Array2<T>) => Number2): Number2 {
  return this.reduce((result, val, index, array) => result + select(val, index, array), 0);
};

Array.prototype.findMap = function <T, V>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => V | Nothing,
): V | Nothing {
  if (!predicate) {
    return this.first();
  }

  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      return result;
    }
  }

  return nothing;
};

Array.prototype.filterMap = function <T, V>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => V | Nothing,
): Array2<V> {
  if (!predicate) {
    return this.slice(0);
  }

  const newArray: Array2<V> = [];

  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      newArray.push(result);
    }
  }

  return newArray;
};

Array.prototype.count = function <T>(
  predicate?: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): Integer {
  if (!predicate) {
    return this.length;
  }

  return this.reduce((sum, val, index, array) => sum + (predicate(val, index, array) ? 1 : 0), 0);
};

Array.prototype.sortBy = function <T>(select: (value: T) => Number2, ascending: Boolean2 = true): Array2<T> {
  if (ascending) {
    return [...this].sort((a, b) => select(a) - select(b));
  }

  return [...this].sort((a, b) => select(b) - select(a));
};

// [1, 2, 3, 0, 5].splitBy(x=>x===0) is [{splitter: nothing, items: [1, 2, 3]}, {splitter: 0, items: [5]}]
Array.prototype.splitBy = function <T>(
  predicate: (value: T, index: Integer, array: Array2<T>) => Boolean2,
): Array2<{splitter: T | Nothing; items: Array2<T>}> {
  const result: Array2<{splitter: T | Nothing; items: Array2<T>}> = [];

  for (let index = 0; index < this.length; index++) {
    const item = this[index];

    if (predicate(item, index, this)) {
      result.push({splitter: item, items: []});

      continue;
    }

    if (result.length === 0) {
      result.push({splitter: nothing, items: []});
    }

    result.last()?.items.push(item);
  }

  return result;
};
