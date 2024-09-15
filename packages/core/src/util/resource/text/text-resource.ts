import {Boolean2, Nothing, String2, nothing} from '#common';
import {$, Resource, TextData, TextRange, TextResourceRange, textData, textResourceRange} from '#core';
import {readFileSync, statSync} from 'fs';

export interface TextResource extends Resource {
  $: $.TextResource;
  data: TextData;

  equals(other: Resource): Boolean2;
  reference(range: TextRange): TextResourceRange;
}

export function textResourceFromData(location: String2 | Nothing, data: String2): TextResource {
  return {
    $: $.TextResource,
    location,
    data: textData(data),

    equals(other: Resource): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    reference(range: TextRange): TextResourceRange {
      return textResourceRange(this, range);
    },
  };
}

export function textResourceFromLocation(location: String2): TextResource | Nothing {
  try {
    if (!statSync(location).isFile()) {
      return nothing;
    }

    const data = readFileSync(location).toString();

    return textResourceFromData(location, data);
  } catch (error) {
    return nothing;
  }
}
