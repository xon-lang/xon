import {$KeyValue, Anything_V2, Boolean2, KeyValue, String2} from '#common';
import {Model} from '#typing';

export function newKeyValue<K extends Model, V extends Anything_V2>(key: K, value: V): KeyValue<K, V> {
  return {
    // todo set valid types
    $: $KeyValue(key.$, value?.$),
    key,
    value,

    equals(other: KeyValue<K, V>, onlyKeyCompare = false): Boolean2 {
      if (onlyKeyCompare) {
        return this.key === other.key;
      }

      return this.key === other.key && this.value === other.value;
    },

    // clone(): KeyValue<K, V> {
    //   return newKeyValue(this.key, this.value);
    // },

    toString(): String2 {
      return `{key: ${this.key}, value: ${this.value}}`;
    },
  };
}
