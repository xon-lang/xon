import {$TextReference, Boolean2, TextRange, TextReference, Uri} from '#common';

export function newTextReference(uri: Uri, range: TextRange): TextReference {
  return {
    $: $TextReference(),
    uri,
    range,

    equals(other: TextReference): Boolean2 {
      return this.uri.equals(other.uri) && this.range.equals(other.range);
    },
  };
}
