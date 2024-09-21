import {
  ArrayData,
  ArrayPredicate,
  ArraySelect,
  Boolean2,
  Integer,
  Nothing,
  nothing,
  Number2,
  String2,
} from '#common';

export function arrayData<T>(array: T[] = []): ArrayData<T> {
  return {
    _array: array,

    get length(): Integer {
      return this._array.length;
    },

    at(index: Integer): T | Nothing {
      return this._array[index];
    },

    at2(index: Integer): T {
      return this._array[index];
    },

    push(...items: T[]): void {
      this._array.push(...items);
    },

    every(predicate: ArrayPredicate<T>): Boolean2 {
      return this._array.every((v, i) => predicate(v, i, this));
    },

    some(predicate: ArrayPredicate<T>): Boolean2 {
      return this._array.some((v, i) => predicate(v, i, this));
    },

    slice(start?: Integer, end?: Integer): ArrayData<T> {
      return arrayData(this._array.slice(start, end));
    },

    take(length: Integer, startIndex: Integer = 0): ArrayData<T> {
      return this.slice(startIndex, startIndex + length);
    },

    takeWhile(
      predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2,
      startIndex = 0,
      includeConditionItem = false,
    ): ArrayData<T> {
      if (!predicate) {
        return this.slice(startIndex);
      }

      for (let i = startIndex; i < this.length; i++) {
        if (!predicate(this.at2(i), i, this)) {
          return this.slice(startIndex, includeConditionItem ? i + 1 : i);
        }
      }

      return this.slice(startIndex, this.length);
    },

    first(predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2): T | Nothing {
      if (this.length === 0) {
        return nothing;
      }

      if (!predicate) {
        return this.at(0);
      }

      for (let index = 0; index < this.length; index++) {
        const element = this.at2(index);

        if (predicate(element, index, this)) {
          return element;
        }
      }

      return nothing;
    },

    last(predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2): T | Nothing {
      if (this.length === 0) {
        return nothing;
      }

      if (!predicate) {
        return this.at(this.length - 1);
      }

      for (let index = this.length - 1; index >= 0; index--) {
        const element = this.at2(index);

        if (predicate(element, index, this)) {
          return element;
        }
      }

      return nothing;
    },

    firstIndex(
      predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2,
      startIndex = 0,
    ): Integer {
      if (this.length === 0) {
        return -1;
      }

      if (!predicate) {
        return 0;
      }

      for (let index = startIndex; index < this.length; index++) {
        if (predicate(this.at2(index), index, this)) {
          return index;
        }
      }

      return -1;
    },

    lastIndex(
      predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2,
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
        if (predicate(this.at2(index), index, this)) {
          return index;
        }
      }

      return -1;
    },

    removeFirst(): ArrayData<T> {
      return arrayData([...this._array].splice(0, 1));
    },

    removeLast(): ArrayData<T> {
      return arrayData([...this._array].splice(-1, 1));
    },

    findMap<V>(predicateSelect: (value: T, index: Integer, array: ArrayData<T>) => V | Nothing): V | Nothing {
      for (let index = 0; index < this.length; index++) {
        const result = predicateSelect(this.at2(index), index, this);

        if (result) {
          return result;
        }
      }

      return nothing;
    },

    filterMap<V>(
      predicateSelect: (value: T, index: Integer, array: ArrayData<T>) => V | Nothing,
    ): ArrayData<V> {
      const newArray: V[] = [];

      for (let index = 0; index < this.length; index++) {
        const result = predicateSelect(this.at2(index), index, this);

        if (result) {
          newArray.push(result);
        }
      }

      return arrayData(newArray);
    },

    count(predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2): Integer {
      if (!predicate) {
        return this.length;
      }

      return this._array.reduce((sum, val, index) => sum + (predicate(val, index, this) ? 1 : 0), 0);
    },

    sum(select: (value: T, index: Integer, array: ArrayData<T>) => Number2): Number2 {
      return this._array.reduce((result, val, index) => result + select(val, index, this), 0);
    },

    min(select: (value: T, index: Integer, array: ArrayData<T>) => Number2): T | Nothing {
      const array: ArrayData<T> = this;

      if (!array.length) {
        return nothing;
      }

      if (array.length === 1) {
        return this.at(0);
      }

      return this._array.slice(1).reduce((prev, cur, index) => {
        const prevValue = select(prev, index - 1, this);
        const curValue = select(cur, index, this);

        if (curValue < prevValue) {
          return cur;
        }

        return prev;
      }, this.at2(0));
    },

    max(select: (value: T, index: Integer, array: ArrayData<T>) => Number2): T | Nothing {
      const array: ArrayData<T> = this;

      if (!array.length) {
        return nothing;
      }

      if (array.length === 1) {
        return this.at(0);
      }

      return this._array.reduce((prev, cur, index) => {
        const prevValue = select(prev, index - 1, this);
        const curValue = select(cur, index, this);

        if (curValue > prevValue) {
          return cur;
        }

        return prev;
      }, this.at2(0));
    },

    minMax(select: ArraySelect<T, Number2>): {min: T; max: T} | Nothing | Nothing {
      const array: ArrayData<T> = this;

      if (!this.length) {
        return nothing;
      }

      if (this.length === 1) {
        return {min: this.at2(0), max: this.at2(0)};
      }

      let min = this.at2(0);
      let max = this.at2(0);

      for (let i = 1; i < array.length; i++) {
        const item = this.at2(i);

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
    },

    sortBy(select: (value: T) => Number2, ascending: Boolean2 = true): ArrayData<T> {
      if (ascending) {
        return arrayData([...this._array].sort((a, b) => select(a) - select(b)));
      }

      return arrayData([...this._array].sort((a, b) => select(b) - select(a)));
    },

    // [1, 2, 3, 0, 5].splitBy(x=>x===0) is [{splitter: nothing, items: [1, 2, 3]}, {splitter: 0, items: [5]}]
    splitBy(
      predicate: (value: T, index: Integer, array: ArrayData<T>) => Boolean2,
    ): ArrayData<{splitter: T | Nothing; items: ArrayData<T>}> {
      const result: ArrayData<{splitter: T | Nothing; items: ArrayData<T>}> = arrayData();

      for (let index = 0; index < this.length; index++) {
        const item = this.at2(index);

        if (predicate(item, index, this)) {
          result.push({splitter: item, items: arrayData([])});

          continue;
        }

        if (result.length === 0) {
          result.push({splitter: nothing, items: arrayData([])});
        }

        result.last()?.items.push(item);
      }

      return result;
    },

    equals(other: ArrayData<T>): Boolean2 {
      return this.length === other.length && this.every((x, i) => other.at(i) === x);
    },

    toDictionary<Key extends String2 | Number2>(select: ArraySelect<T, Key>): Record<Key, T> {
      return this._array.reduce((o, v, i) => {
        o[select(v, i, this)] = v;

        return o;
      }, {} as Record<Key, T>);
    },
  };
}
