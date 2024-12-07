import {
  $TextResource,
  Boolean2,
  Nothing,
  Resource,
  String2,
  TextData,
  TextRange,
  TextReference,
  TextResource,
  newTextData,
  nothing,
  textResourceRange,
} from '#common';
import {readFileSync, statSync} from 'node:fs';

export function newTextResource(location: TextData | Nothing, data: TextData): TextResource {
  return {
    $: $TextResource,
    location,
    data,

    reference(range: TextRange): TextReference {
      return textResourceRange(this, range);
    },

    equals(other: Resource<TextData>): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    // clone(): TextResource {
    //   return newTextResourceFromData(this.location, this.data);
    // },

    toString(): String2 {
      return `{ location: ${this.location}, data: ${this.data}}`;
    },
  };
}

export function newTextResourceFromLocation(location: TextData): TextResource | Nothing {
  try {
    if (!statSync(location.toString()).isFile()) {
      return nothing;
    }

    const data = newTextData(readFileSync(location.toString()).toString());

    return newTextResource(location, data);
  } catch (error) {
    return nothing;
  }
}
