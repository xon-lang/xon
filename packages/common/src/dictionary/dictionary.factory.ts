import {
  $Dictionary,
  Anything_V2,
  ArrayData,
  Boolean2,
  Dictionary,
  Integer,
  KeyValue,
  newArrayData,
  newKeyValue,
  Nothing,
  Number2,
} from '#common';
import {Model, modelEquals} from '#typing';

export function newDictionary<K extends Model, V extends Anything_V2>(
  array: ArrayData<KeyValue<K, V>> = newArrayData(),
): Dictionary<K, V> {
  return {
    ...array,
    _base: array,

    // todo set generics
    $: $Dictionary(array.at(0)?.key.$, array.at(0)?.value?.$),

    slice(startIndex: Integer, stopIndex?: Integer | Nothing): Dictionary<K, V> {
      return newDictionary(this._base.slice(startIndex, stopIndex));
    },

    addFirstItems(items: ArrayData<KeyValue<K, V>>): Dictionary<K, V> {
      return newDictionary(this._base.addFirstItems(items));
    },

    addFirstItem(item: KeyValue<K, V>): Dictionary<K, V> {
      return newDictionary(this._base.addFirstItem(item));
    },

    addLastItems(items: ArrayData<KeyValue<K, V>>): Dictionary<K, V> {
      return newDictionary(this._base.addLastItems(items));
    },

    addLastItem(item: KeyValue<K, V>): Dictionary<K, V> {
      return newDictionary(this._base.addLastItem(item));
    },

    removeFirst(length?: Integer | Nothing): Dictionary<K, V> {
      return newDictionary(this._base.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): Dictionary<K, V> {
      return newDictionary(this._base.removeLast(length));
    },

    takeWhile(
      predicate?: (value: KeyValue<K, V>, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): Dictionary<K, V> {
      return newDictionary(this._base.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): Dictionary<K, V> {
      return newDictionary(this._base.take(length, startIndex));
    },

    sort(compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => Number2): Dictionary<K, V> {
      return newDictionary(this._base.sort(compareFn));
    },

    sortBy(select: (item: KeyValue<K, V>) => Number2, ascending?: Boolean2): Dictionary<K, V> {
      return newDictionary(this._base.sortBy(select, ascending));
    },

    equals(other: Dictionary<K, V> | ArrayData<KeyValue<K, V>>): Boolean2 {
      return this._base.equals(other);
    },

    clone(): Dictionary<K, V> {
      return newDictionary(this._base.clone());
    },

    keys(): ArrayData<K> {
      return this.map((x) => x.key);
    },

    values(): ArrayData<V> {
      return this.map((x) => x.value);
    },

    get(key: K): V | Nothing {
      return this.first((x) => modelEquals(x.key, key))?.value;
    },

    // todo remove 'get2'
    get2(key: K): V {
      return this.get(key)!;
    },

    has(key: K): Boolean2 {
      return this.some((x) => modelEquals(x.key, key));
    },

    set(key: K, value: V): void {
      const item = this.first((x) => modelEquals(x.key, key));

      if (item) {
        item.value = value;
      } else {
        this.addLastItem(newKeyValue(key, value));
      }
    },
  };
}
