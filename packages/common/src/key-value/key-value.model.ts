import {$CommonType, Anything, Boolean2} from '#common';
import {$Model, Model} from '#typing';

export type KeyValue<K = Anything, V = Anything> = Model & {
  key: K;
  value: V;

  equals(other: KeyValue<K, V>): Boolean2;
  equals(other: KeyValue<K, V>, onlyKeyCompare: Boolean2): Boolean2;
};

export const $KeyValue = <T extends Model, V extends Model>($T = $Model(), $V = $Model()) =>
  $CommonType<KeyValue<T, V>>('KeyValue', undefined, [$T, $V]);
