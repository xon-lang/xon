import {$Uri, ArrayData, Boolean2, newText, Text, Uri} from '#common';
import {join} from 'node:path';

export function newUri(value: Text): Uri {
  return {
    $: $Uri(),
    value,

    resolve(relativePaths: ArrayData<Text>): Uri {
      return newUri(
        newText(join(this.value.toNativeString(), newText(relativePaths, newText('/')).toNativeString())),
      );
    },

    equals(other: Uri): Boolean2 {
      return this.value.equals(other.value);
    },
  };
}
