import {
  $Dictionary,
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
import {$Model, is, modelEquals} from '#typing';

export function newDictionary<K, V>(array: ArrayData<KeyValue<K, V>> = newArrayData()): Dictionary<K, V> {
  const firstElement = array.first();
  const $KeyType = is(firstElement?.key, $Model()) ? firstElement.key.$ : $Model();
  const $ValueType = is(firstElement?.value, $Model()) ? firstElement.value.$ : $Model();
  const base = array.clone();

  return {
    ...base,

    $: $Dictionary($KeyType, $ValueType),

    slice(startIndex: Integer, stopIndex?: Integer | Nothing): Dictionary<K, V> {
      return newDictionary(base.slice(startIndex, stopIndex));
    },

    addFirstItems(items: ArrayData<KeyValue<K, V>>): Dictionary<K, V> {
      return newDictionary(base.addFirstItems(items));
    },

    addFirstItem(item: KeyValue<K, V>): Dictionary<K, V> {
      return newDictionary(base.addFirstItem(item));
    },

    addLastItems(items: ArrayData<KeyValue<K, V>>): Dictionary<K, V> {
      return newDictionary(base.addLastItems(items));
    },

    addLastItem(item: KeyValue<K, V>): Dictionary<K, V> {
      return newDictionary(base.addLastItem(item));
    },

    removeFirst(length?: Integer | Nothing): Dictionary<K, V> {
      return newDictionary(base.removeFirst(length));
    },

    removeLast(length?: Integer | Nothing): Dictionary<K, V> {
      return newDictionary(base.removeLast(length));
    },

    takeWhile(
      predicate: (value: KeyValue<K, V>, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): Dictionary<K, V> {
      return newDictionary(base.takeWhile(predicate, startIndex, includeConditionItem));
    },

    take(length: Integer, startIndex?: Integer): Dictionary<K, V> {
      return newDictionary(base.take(length, startIndex));
    },

    sort(compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => Number2): Dictionary<K, V> {
      return newDictionary(base.sort(compareFn));
    },

    sortBy(select: (item: KeyValue<K, V>) => Number2, ascending?: Boolean2): Dictionary<K, V> {
      return newDictionary(base.sortBy(select, ascending));
    },

    equals(other: Dictionary<K, V> | ArrayData<KeyValue<K, V>>): Boolean2 {
      return base.equals(other);
    },

    clone(): Dictionary<K, V> {
      return newDictionary(base.clone());
    },

    //

    keys(): ArrayData<K> {
      return this.map((x) => x.key);
    },

    values(): ArrayData<V> {
      return this.map((x) => x.value);
    },

    has(key: K): Boolean2 {
      return this.some((x) => modelEquals(x.key, key));
    },

    get(key: K): V | Nothing {
      return this.first((x) => modelEquals(x.key, key))?.value;
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
