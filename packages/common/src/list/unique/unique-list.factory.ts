import {
  $UniqueList,
  Anything_V2,
  ArrayData,
  Boolean2,
  Integer,
  newArrayData,
  Nothing,
  Number2,
  String2,
  UniqueList,
} from '#common';

export function newUniqueList<T extends Anything_V2>(array: ArrayData<T> = newArrayData()): UniqueList<T> {
  return {
    ...array,
    _base: array,

    // todo set generics
    $: $UniqueList(array.at(0)?.$),

    slice(startIndex: Integer, stopIndex?: Integer | Nothing): UniqueList<T> {
      return newUniqueList(this._base.slice(startIndex, stopIndex));
    },

    addFirstItems(items: ArrayData<T>): UniqueList<T> {
      items = items.filter((x) => !this.hasItem(x));

      return newUniqueList(this._base.addFirstItems(items));
    },

    addFirstItem(item: T): UniqueList<T> {
      if (this.hasItem(item)) {
        return this;
      }

      return newUniqueList(this._base.addFirstItem(item));
    },

    addLastItems(items: ArrayData<T>): UniqueList<T> {
      items = items.filter((x) => !this.hasItem(x));

      return newUniqueList(this._base.addLastItems(items));
    },

    addLastItem(item: T): UniqueList<T> {
      if (this.hasItem(item)) {
        return this;
      }

      return newUniqueList(this._base.addLastItem(item));
    },

    removeFirst(length?: Integer | Nothing): UniqueList<T> {
      return newUniqueList(this._base.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): UniqueList<T> {
      return newUniqueList(this._base.removeLast(length));
    },

    takeWhile(
      predicate?: (value: T, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): UniqueList<T> {
      return newUniqueList(this._base.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): UniqueList<T> {
      return newUniqueList(this._base.take(length, startIndex));
    },

    sort(compareFn?: (a: T, b: T) => Number2): UniqueList<T> {
      return newUniqueList(this._base.sort(compareFn));
    },

    sortBy(select: (item: T) => Number2, ascending?: Boolean2): UniqueList<T> {
      return newUniqueList(this._base.sortBy(select, ascending));
    },

    equals(other: ArrayData<T> | ArrayData<T>): Boolean2 {
      return this._base.equals(other);
    },

    clone(): UniqueList<T> {
      return newUniqueList(this._base.clone());
    },

    toNativeString(separator?: String2 | Nothing): String2 {
      return this._base.toNativeString(separator);
    },
  };
}
