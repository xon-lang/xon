import {Boolean2, KeyValue, String2} from '#common';
import {$} from '#typing';

export function newKeyValue<K, V>(key: K, value: V): KeyValue<K, V> {
  return {
    $: $.KeyValue,
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
