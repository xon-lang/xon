import {$TextReference, Boolean2, Text, TextRange, TextReference, TextResource} from '#common';

export function textResourceRange(resource: TextResource, range: TextRange): TextReference {
  return {
    $: $TextReference,
    resource,
    range,

    equals(other: TextReference): Boolean2 {
      return this.resource.equals(other.resource) && this.range.equals(other.range);
    },

    text(): Text {
      return this.resource.data.slice(this.range);
    },
  };
}
