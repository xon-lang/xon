import {ArrayData, Boolean2, Integer, KeyValue, Nothing, Number2, String2} from '#common';
import {$Model} from '#typing';

// @ts-ignore
export interface Dictionary<K extends $Model = $Model, V = unknown> extends ArrayData<KeyValue<K, V>> {
  base: ArrayData<KeyValue<K, V>>;

  slice(startIndex: Integer, stopIndex?: Integer | Nothing): Dictionary<K, V>;
  addFirst(...items: KeyValue<K, V>[]): Dictionary<K, V>;
  addLast(...items: KeyValue<K, V>[]): Dictionary<K, V>;
  removeFirst(length?: Integer | Nothing): Dictionary<K, V>;
  removeLast(length?: Integer | Nothing): Dictionary<K, V>;

  takeWhile(
    predicate?: (value: KeyValue<K, V>, index: Integer) => Boolean2,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): Dictionary<K, V>;
  take(length: Integer, startIndex?: Integer): Dictionary<K, V>;

  sortBy(select: (item: KeyValue<K, V>) => Number2, ascending?: Boolean2): Dictionary<K, V>;
  sort(compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => Number2): Dictionary<K, V>;

  equals(other: Dictionary<K, V>): Boolean2;
  equals(other: ArrayData<KeyValue<K, V>>): Boolean2;
  clone(): Dictionary<K, V>;
  toString(): String2;

  keys(): ArrayData<K>;
  values(): ArrayData<V>;
  get(key: K): V | Nothing;
  get2(key: K): V;
  has(key: K): Boolean2;
  set(key: K, value: V): Boolean2;
}
