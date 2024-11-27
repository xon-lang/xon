import {Boolean2} from '#/common';
import {$Model} from '#/typing';

export type KeyValue<K = unknown, V = unknown> = $Model & {
  key: K;
  value: V;

  equals(other: KeyValue<K, V>): Boolean2;
  equals(other: KeyValue<K, V>, onlyKeyCompare: Boolean2): Boolean2;
  // todo remove clone
  clone(): KeyValue<K, V>;
};
