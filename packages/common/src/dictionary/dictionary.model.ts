import {$ArrayData, $CommonType, $KeyValue, Anything, ArrayData, Boolean2, KeyValue, Nothing} from '#common';
import {$Model, $Type, Model} from '#typing';

export interface Dictionary<K = Anything, V = Anything> extends ArrayData<KeyValue<K, V>> {
  _base: ArrayData<KeyValue<K, V>>;

  keys(): ArrayData<K>;
  values(): ArrayData<V>;
  get(key: K): V | Nothing;
  get2(key: K): V;
  has(key: K): Boolean2;
  set(key: K, value: V): void;
}

export const $Dictionary = <T extends Model, V extends Model>($T: $Type = $Model(), $V: $Type = $Model()) =>
  $CommonType<Dictionary<T, V>>('Dictionary', $ArrayData($KeyValue($T, $V)), [$T, $V]);
