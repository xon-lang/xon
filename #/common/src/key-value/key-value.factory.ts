import {$KeyValue, Boolean2, KeyValue, Model_V2, String2} from '#common';

export function newKeyValue<K extends Model_V2, V extends Model_V2>(key: K, value: V): KeyValue<K, V> {
  return {
    // todo set valid types
    $: $KeyValue(),
    key,
    value,

    equals(other: KeyValue<K, V>, onlyKeyCompare = false): Boolean2 {
      if (onlyKeyCompare) {
        return this.key === other.key;
      }

      return this.key === other.key && this.value === other.value;
    },

    clone(): KeyValue<K, V> {
      return newKeyValue(this.key, this.value);
    },

    toString(): String2 {
      return `{key: ${this.key}, value: ${this.value}}`;
    },
  };
}
