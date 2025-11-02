import {$CoreType, $Model, Anything, Boolean2, Brand, Model} from '#core';

export type KeyValue<K = Anything, V = Anything> = Model &
  Brand<'Core.KeyValue'> & {
    key: K;
    value: V;

    equals(other: KeyValue<K, V>): Boolean2;
    equals(other: KeyValue<K, V>, onlyKeyCompare: Boolean2): Boolean2;
  };

export const $KeyValue = <T extends Model, V extends Model>($T = $Model(), $V = $Model()) =>
  $CoreType<KeyValue<T, V>>('KeyValue', undefined, [$T, $V]);
