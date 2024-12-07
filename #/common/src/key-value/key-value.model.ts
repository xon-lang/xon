import {$Model_V2, Anything_V2, Boolean2, commonPackageType, Model_V2} from '#common';

export type KeyValue<K extends Model_V2 = Model_V2, V extends Anything_V2 = Anything_V2> = Model_V2 & {
  key: K;
  value: V;

  equals(other: KeyValue<K, V>): Boolean2;
  equals(other: KeyValue<K, V>, onlyKeyCompare: Boolean2): Boolean2;
  // todo remove clone
  clone(): KeyValue<K, V>;
};

export const $KeyValue = <T extends Model_V2, V extends Model_V2>($T = $Model_V2, $V = $Model_V2) =>
  commonPackageType<KeyValue<T, V>>('KeyValue', null, [$T, $V]);
