import {$Model, Anything_V2, Boolean2, commonPackageType, Model} from '#common';

export type KeyValue<K extends Model = Model, V extends Anything_V2 = Anything_V2> = Model & {
  key: K;
  value: V;

  equals(other: KeyValue<K, V>): Boolean2;
  equals(other: KeyValue<K, V>, onlyKeyCompare: Boolean2): Boolean2;
  // todo remove clone
  clone(): KeyValue<K, V>;
};

export const $KeyValue = <T extends Model, V extends Model>($T = $Model, $V = $Model) =>
  commonPackageType<KeyValue<T, V>>('KeyValue', null, [$T, $V]);
