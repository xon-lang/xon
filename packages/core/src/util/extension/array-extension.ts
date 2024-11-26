import {ArrayData, Boolean2, Integer, newArrayData, Nothing, nothing, Number2, String2} from '#common';

Array.prototype.take = function <T>(length: Integer, startIndex: Integer = 0): T[] {
  return this.slice(startIndex, startIndex + length);
};

Array.prototype.takeWhile = function <T>(
  predicate?: (value: T, index: Integer, array: T[]) => Boolean2,
  startIndex = 0,
  includeConditionItem = false,
): T[] {
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
  predicate?: (value: T, index: Integer, array: T[]) => Boolean2,
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

Array.prototype.last = function <T>(
  predicate?: (value: T, index: Integer, array: T[]) => Boolean2,
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

Array.prototype.firstIndex = function <T>(
  predicate?: (value: T, index: Integer, array: T[]) => Boolean2,
  startIndex = 0,
): Integer {
  if (this.length === 0) {
    return -1;
  }

  if (!predicate) {
    return 0;
  }

  for (let index = startIndex; index < this.length; index++) {
    if (predicate(this[index], index, this)) {
      return index;
    }
  }

  return -1;
};

Array.prototype.lastIndex = function <T>(
  predicate?: (value: T, index: Integer, array: T[]) => Boolean2,
  startIndex?: Integer,
): Integer {
  if (this.length === 0) {
    return -1;
  }

  if (!predicate) {
    return this.length - 1;
  }

  startIndex ??= this.length - 1;

  for (let index = startIndex; index >= 0; index--) {
    if (predicate(this[index], index, this)) {
      return index;
    }
  }

  return -1;
};

Array.prototype.removeFirst = function <T>(): T[] {
  this.splice(0, 1);

  return this;
};

Array.prototype.removeLast = function <T>(): T[] {
  this.splice(-1, 1);

  return this;
};

Array.prototype.sortStrings = function (): String2[] {
  // todo fix 'as String2[]'
  return (this as String2[]).sort((a, b) => a.localeCompare(b));
};

Array.prototype.findMap = function <T, V>(
  predicate?: (value: T, index: Integer, array: T[]) => V | Nothing,
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
  predicate?: (value: T, index: Integer, array: T[]) => V | Nothing,
): V[] {
  if (!predicate) {
    return this.slice(0);
  }

  const newArray: V[] = [];

  for (let index = 0; index < this.length; index++) {
    const result = predicate(this[index], index, this);

    if (result) {
      newArray.push(result);
    }
  }

  return newArray;
};

Array.prototype.count = function <T>(
  predicate?: (value: T, index: Integer, array: T[]) => Boolean2,
): Integer {
  if (!predicate) {
    return this.length;
  }

  return this.reduce((sum, val, index, array) => sum + (predicate(val, index, array) ? 1 : 0), 0);
};

Array.prototype.sum = function <T>(select: (value: T, index: Integer, array: T[]) => Number2): Number2 {
  return this.reduce((result, val, index, array) => result + select(val, index, array), 0);
};

Array.prototype.min = function <T>(select: (value: T, index: Integer, array: T[]) => Number2): T | Nothing {
  const array: T[] = this;

  if (!array.length) {
    return nothing;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array.slice(1).reduce((prev, cur, index, array) => {
    const prevValue = select(prev, index - 1, array);
    const curValue = select(cur, index, array);

    if (curValue < prevValue) {
      return cur;
    }

    return prev;
  }, array[0]);
};

Array.prototype.max = function <T>(select: (value: T, index: Integer, array: T[]) => Number2): T | Nothing {
  const array: T[] = this;

  if (!array.length) {
    return nothing;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array.slice(1).reduce((prev, cur, index, arr) => {
    const prevValue = select(prev, index - 1, arr);
    const curValue = select(cur, index, arr);

    if (curValue > prevValue) {
      return cur;
    }

    return prev;
  }, array[0]);
};

Array.prototype.minMax = function <T>(
  select: (value: T, index: Integer, array: T[]) => Number2,
): {min: T; max: T} | Nothing | Nothing {
  const array: T[] = this;

  if (!this.length) {
    return nothing;
  }

  if (this.length === 1) {
    return {min: array[0], max: array[0]};
  }

  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    const item = array[i];

    const value = select(item, i, array);
    const minValue = select(min, i, array);
    const maxValue = select(max, i, array);

    if (value > maxValue) {
      max = item;
    }

    if (value < minValue) {
      min = item;
    }
  }

  return {min, max};
};

Array.prototype.sortBy = function <T>(select: (value: T) => Number2, ascending: Boolean2 = true): T[] {
  if (ascending) {
    return [...this].sort((a, b) => select(a) - select(b));
  }

  return [...this].sort((a, b) => select(b) - select(a));
};

// [1, 2, 3, 0, 5].splitBy(x=>x===0) is [{splitter: nothing, items: [1, 2, 3]}, {splitter: 0, items: [5]}]
Array.prototype.splitBy = function <T>(
  predicate: (value: T, index: Integer, array: T[]) => Boolean2,
): {splitter: T | Nothing; items: T[]}[] {
  const result: {splitter: T | Nothing; items: T[]}[] = [];

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

Array.prototype.equals = function <T>(other: T[]): Boolean2 {
  return this.length === other.length && this.every((x, i) => other[i] === x);
};

Array.prototype.toDictionary = function <T, Key extends String2 | Number2>(
  select: (value: T, index: Integer, array: T[]) => Key,
): Record<Key, T> {
  return this.reduce((o: Record<Key, T>, v, i, arr) => {
    o[select(v, i, arr)] = v;

    return o;
  }, {});
};

Array.prototype.toArrayData = function <T>(): ArrayData<T> {
  return newArrayData(this);
};
