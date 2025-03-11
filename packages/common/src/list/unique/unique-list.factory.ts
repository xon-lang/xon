import {$UniqueList, ArrayData, Boolean2, Integer, newArrayData, Nothing, Number2, UniqueList} from '#common';
import {$Model, is, modelEquals} from '#typing';

export function newUniqueList<T>(array: ArrayData<T> = newArrayData()): UniqueList<T> {
  array = array.filter((x, i) => !array.some((z) => modelEquals(z, x), 0, i));
  const firstElement = array.first();
  const $Type = is(firstElement, $Model()) ? firstElement.$ : $Model();

  return {
    ...array,
    _base: array,

    $: $UniqueList($Type),

    slice(startIndex: Integer, stopIndex?: Integer | Nothing): UniqueList<T> {
      return newUniqueList(this._base.slice(startIndex, stopIndex));
    },

    addFirstItems(items: ArrayData<T>): UniqueList<T> {
      const uniqueItems = items.filter((x) => !this.some((z) => modelEquals(z, x)));

      return newUniqueList(this._base.addFirstItems(uniqueItems));
    },

    addFirstItem(item: T): UniqueList<T> {
      if (this.some((x) => modelEquals(x, item))) {
        return this;
      }

      return newUniqueList(this._base.addFirstItem(item));
    },

    addLastItems(items: ArrayData<T>): UniqueList<T> {
      const uniqueItems = items.filter((x) => !this.some((z) => modelEquals(z, x)));

      return newUniqueList(this._base.addLastItems(uniqueItems));
    },

    addLastItem(item: T): UniqueList<T> {
      if (this.some((x) => modelEquals(x, item))) {
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
      predicate: (value: T, index: Integer) => Boolean2,
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

    equals(other: UniqueList<T> | ArrayData<T>): Boolean2 {
      return this._base.equals(other);
    },

    clone(): UniqueList<T> {
      return newUniqueList(this._base.clone());
    },
  };
}
