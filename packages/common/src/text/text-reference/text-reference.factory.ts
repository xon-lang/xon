import {$TextReference, Boolean2, Text, TextRange, TextReference} from '#common';

export function newTextReference(location: Text, range: TextRange): TextReference {
  return {
    $: $TextReference(),
    location,
    range,

    equals(other: TextReference): Boolean2 {
      return this.location.equals(other.location) && this.range.equals(other.range);
    },
  };
}
