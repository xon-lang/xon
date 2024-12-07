import {
  $ArrayData,
  $KeyValue,
  $Model_V2,
  $Type,
  Anything_V2,
  ArrayData,
  Boolean2,
  commonPackageType,
  Integer,
  KeyValue,
  Model_V2,
  Nothing,
  Number2,
  String2,
} from '#common';

// @ts-ignore
export interface Dictionary<K extends Model_V2 = Model_V2, V extends Anything_V2 = Anything_V2>
  extends ArrayData<KeyValue<K, V>> {
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

export const $Dictionary = <T extends Model_V2, V extends Model_V2>(
  $T: $Type = $Model_V2,
  $V: $Type = $Model_V2,
) => commonPackageType<Dictionary<T, V>>('Dictionary', $ArrayData($KeyValue($T, $V)), [$T, $V]);
