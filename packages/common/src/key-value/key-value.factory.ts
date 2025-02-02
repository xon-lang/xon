import {$KeyValue, Boolean2, KeyValue} from '#common';
import {$Model, is, Model} from '#typing';

export function newKeyValue<K extends Model, V>(key: K, value: V): KeyValue<K, V> {
  return {
    // todo set valid types
    $: $KeyValue(key.$, is(value, $Model) ? value.$ : $Model),
    key,
    value,

    equals(other: KeyValue<K, V>, onlyKeyCompare = false): Boolean2 {
      if (onlyKeyCompare) {
        return this.key === other.key;
      }

      return this.key === other.key && this.value === other.value;
    },
  };
}
