import {
  $ArrayData,
  ArrayData,
  ArrayPredicate,
  ArraySafePredicate,
  ArraySelect,
  Boolean2,
  Integer,
  maxArrayMethod,
  minArrayMethod,
  minMaxArrayMethod,
  Nothing,
  nothing,
  Number2,
  removeArrayMethod,
  splitByArrayMethod,
} from '#common';
import {extractType, Model, modelEquals} from '#typing';

export function newArrayData<T>(array: ArrayLike<T> | IterableIterator<T> = []): ArrayData<T> {
  // export function newArrayData<T>($itemType: $Type): ArrayData<T>
  // export function newArrayData<T>($itemType?: $Type  |  T[]): ArrayData<T> {

  const _items = Array.from(array);

  return {
    $: $ArrayData(extractType(_items[0])),
    _items,

    [Symbol.iterator](): IterableIterator<T> {
      return this._items[Symbol.iterator]();
    },

    length(): Integer {
      return this._items.length;
    },

    at(index: Integer): T | Nothing {
      return this._items[index];
    },

    at2(index: Integer): T {
      return this._items[index];
    },

    every(predicate: ArrayPredicate<T>): Boolean2 {
      return this._items.every((v, i) => predicate(v, i));
    },

    some(predicate?: ArrayPredicate<T> | Nothing): Boolean2 {
      if (!predicate) {
        return this.length() > 0;
      }

      return this._items.some((v, i) => predicate(v, i));
    },

    slice(startIndex: Integer, stopIndex?: Integer | Nothing): ArrayData<T> {
      return newArrayData(this._items.slice(startIndex, stopIndex ?? undefined));
    },

    isEmpty(): Boolean2 {
      return this.length() === 0;
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

      for (let i = startIndex; i < this.length(); i++) {
        if (!predicate(this.at2(i), i, this)) {
          return this.slice(startIndex, includeConditionItem ? i + 1 : i);
        }
      }

      return this.slice(startIndex, this.length());
    },

    first(predicate?: ((value: T, index: Integer, array: ArrayData<T>) => Boolean2) | Nothing): T | Nothing {
      if (this.length() === 0) {
        return nothing;
      }

      if (!predicate) {
        return this.at(0);
      }

      for (let index = 0; index < this.length(); index++) {
        const element = this.at2(index);

        if (predicate(element, index, this)) {
          return element;
        }
      }

      return nothing;
    },

    last(predicate?: ((value: T, index: Integer, array: ArrayData<T>) => Boolean2) | Nothing): T | Nothing {
      if (this.length() === 0) {
        return nothing;
      }

      if (!predicate) {
        return this.at(this.length() - 1);
      }

      for (let index = this.length() - 1; index >= 0; index--) {
        const element = this.at2(index);

        if (predicate(element, index, this)) {
          return element;
        }
      }

      return nothing;
    },

    firstLast(): {first: T | Nothing; last: T | Nothing} {
      return {
        first: this.first(),
        last: this.last(),
      };
    },

    firstIndex(
      predicate?: ((value: T, index: Integer) => Boolean2) | Nothing,
      startIndex?: Integer | Nothing,
    ): Integer {
      if (this.length() === 0) {
        return -1;
      }

      startIndex ??= 0;

      if (!predicate) {
        return startIndex;
      }

      for (let index = startIndex; index < this.length(); index++) {
        if (predicate(this.at2(index), index)) {
          return index;
        }
      }

      return -1;
    },

    remove: removeArrayMethod,

    firstItemIndex(item: T, startIndex?: Integer | Nothing): Integer {
      return this.firstIndex((x) => modelEquals(x, item), startIndex);
    },

    firstItemsIndex(items: ArrayData<T>, startIndex?: Integer | Nothing): Integer {
      if (items.length() > this.length()) {
        return -1;
      }

      return this.firstIndex(
        (x, i) => this.length() - i >= items.length() && items.every((z) => modelEquals(z, x)),
        startIndex,
      );
    },

    lastIndex(
      predicate?: (value: T, index: Integer) => Boolean2,
      startIndex?: Integer | Nothing,
    ): Integer | Nothing {
      if (this.length() === 0) {
        return nothing;
      }

      startIndex ??= this.length() - 1;

      if (!predicate) {
        return startIndex;
      }

      for (let index = startIndex; index >= 0; index--) {
        if (predicate(this.at2(index), index)) {
          return index;
        }
      }

      return nothing;
    },

    lastItemIndex(item: T, startIndex?: Integer | Nothing): Integer | Nothing {
      return this.lastIndex((x) => modelEquals(x, item), startIndex);
    },

    lastItemsIndex(items: ArrayData<T>, startIndex?: Integer | Nothing): Integer {
      if (items.length() > this.length()) {
        return -1;
      }

      // todo fix '-1'
      return (
        this.lastIndex(
          (x, i) => this.length() - i >= items.length() && items.every((z) => modelEquals(z, x)),
          startIndex,
        ) ?? -1
      );
    },

    firstLastIndex(): {firstIndex: Integer | Nothing; lastIndex: Integer | Nothing} {
      return {
        firstIndex: this.firstIndex(),
        lastIndex: this.lastIndex(),
      };
    },

    filter<V extends T>(predicate: ArraySafePredicate<T, V>): ArrayData<V> {
      return newArrayData(this._items.filter(predicate));
    },

    map<V>(select: ArraySelect<T, V>): ArrayData<V> {
      return newArrayData(this._items.map(select));
    },

    hasItem(item: T): Boolean2 {
      return this.firstItemIndex(item) >= 0;
    },

    hasItems(items: ArrayData<T>): Boolean2 {
      return this.firstItemsIndex(items) >= 0;
    },

    // todo should we return new array/immutability ???
    addFirstItems(items: ArrayData<T>): ArrayData<T> {
      this._items.unshift(...items);

      return this;
    },

    addFirstItem(item: T): ArrayData<T> {
      this._items.unshift(item);

      return this;
    },

    addLastItems(items: ArrayData<T>): ArrayData<T> {
      this._items.push(...items);

      return this;
    },

    addLastItem(item: T): ArrayData<T> {
      this._items.push(item);

      return this;
    },

    removeFirst(length?: Integer | Nothing): ArrayData<T> {
      return newArrayData([...this._items].splice(0, length ?? 1));
    },

    removeLast(length?: Integer | Nothing): ArrayData<T> {
      return newArrayData([...this._items].splice(-1, length ?? 1));
    },

    findMap<V>(predicateSelect: (value: T, index: Integer, array: ArrayData<T>) => V | Nothing): V | Nothing {
      for (let index = 0; index < this.length(); index++) {
        const result = predicateSelect(this.at2(index), index, this);

        if (result) {
          return result;
        }
      }

      return nothing;
    },

    filterMap<V extends Model>(
      predicateSelect: (value: T, index: Integer, array: ArrayData<T>) => V | Nothing,
    ): ArrayData<V> {
      const newArray: V[] = [];

      for (let index = 0; index < this.length(); index++) {
        const result = predicateSelect(this.at2(index), index, this);

        if (result) {
          newArray.push(result);
        }
      }

      return newArrayData(newArray);
    },

    count(predicate?: (value: T, index: Integer, array: ArrayData<T>) => Boolean2): Integer {
      if (!predicate) {
        return this.length();
      }

      return this._items.reduce((sum, val, index) => sum + (predicate(val, index, this) ? 1 : 0), 0);
    },

    sum(select: (value: T, index: Integer, array: ArrayData<T>) => Number2): Number2 {
      return this._items.reduce((result, val, index) => result + select(val, index, this), 0);
    },

    min: minArrayMethod,
    max: maxArrayMethod,
    minMax: minMaxArrayMethod,

    sort(compareFn?: (a: T, b: T) => number): ArrayData<T> {
      return newArrayData([...this._items.sort(compareFn)]);
    },

    sortBy(select: (value: T) => Number2, ascending: Boolean2 = true): ArrayData<T> {
      if (ascending) {
        return newArrayData([...this._items].sort((a, b) => select(a) - select(b)));
      }

      return newArrayData([...this._items].sort((a, b) => select(b) - select(a)));
    },

    flat<A>(this: ArrayData<ArrayData<A>>): ArrayData<A> {
      const flatItems = this._items.flatMap((x) => x._items);

      return newArrayData(flatItems);
    },

    flatMap<V>(select: ArraySelect<T, ArrayData<V>>): ArrayData<V> {
      return this.map((x, i) => select(x, i)).flat();
    },

    splitBy: splitByArrayMethod,

    // todo fix 'reduce'
    reduce<V>(select: (previous: any, current: any, index: Integer) => any, initialValue?: V | Nothing): V {
      if (initialValue) {
        return this._items.reduce<V>((p, c, i) => select(p, c, i), initialValue);
      }

      return this._items.reduce((p, c, i) => select(p, c, i)) as unknown as V;
    },

    clone(): ArrayData<T> {
      return newArrayData([...this._items]);
    },

    equals(other: ArrayData<T>): Boolean2 {
      return this.length() === other.length() && this.every((x, i) => other.at(i) === x);
    },

    toNativeArray(): T[] {
      return [...this._items];
    },
  };
}
