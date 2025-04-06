import {
  $ArrayData,
  $CommonType,
  $KeyValue,
  Anything,
  ArrayData,
  Boolean2,
  Integer,
  KeyValue,
  Nothing,
  Number2,
} from '#common';
import {$Model, $Type, Model} from '#typing';

export type Dictionary<K = Anything, V = Anything> = ArrayData<KeyValue<K, V>> & {
  // todo remove all inherited methods
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): Dictionary<K, V>;
  addFirstItems(items: ArrayData<KeyValue<K, V>>): Dictionary<K, V>;
  addFirstItem(item: KeyValue<K, V>): Dictionary<K, V>;
  addLastItems(items: ArrayData<KeyValue<K, V>>): Dictionary<K, V>;
  addLastItem(item: KeyValue<K, V>): Dictionary<K, V>;
  removeFirst(length?: Integer | Nothing): Dictionary<K, V>;
  removeLast(length?: Integer | Nothing): Dictionary<K, V>;
  takeWhile(
    predicate: (value: KeyValue<K, V>, index: Integer) => Boolean2,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): Dictionary<K, V>;
  take(length: Integer, startIndex?: Integer): Dictionary<K, V>;
  sort(compareFn?: (a: KeyValue<K, V>, b: KeyValue<K, V>) => Number2): Dictionary<K, V>;
  sortBy(select: (item: KeyValue<K, V>) => Number2, ascending?: Boolean2): Dictionary<K, V>;
  clone(): Dictionary<K, V>;
  equals(other: Dictionary<K, V> | ArrayData<KeyValue<K, V>>): Boolean2;

  keys(): ArrayData<K>;
  values(): ArrayData<V>;
  has(key: K): Boolean2;
  get(key: K): V | Nothing;
  set(key: K, value: V): void;
};

export const $Dictionary = <T extends Model, V extends Model>($T: $Type = $Model(), $V: $Type = $Model()) =>
  $CommonType<Dictionary<T, V>>('Dictionary', $ArrayData($KeyValue($T, $V)), [$T, $V]);
