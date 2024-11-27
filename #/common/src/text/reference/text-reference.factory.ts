import {Boolean2, TextData, TextRange, TextReference, TextResource} from '#/common';
import {$} from '#/typing';

export function textResourceRange(resource: TextResource, range: TextRange): TextReference {
  return {
    $: $.TextResourceRange,
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
