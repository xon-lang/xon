import {$TextReference, Boolean2, TextData, TextRange, TextReference, TextResource} from '#common';

// todo rename to 'textReference'
export function textResourceRange(resource: TextResource, range: TextRange): TextReference {
  return {
    $: $TextReference,
    resource,
    range,

    equals(other: TextReference): Boolean2 {
      return this.resource.equals(other.resource) && this.range.equals(other.range);
    },

    text(): TextData {
      return this.resource.data.slice(this.range);
    },
  };
}
