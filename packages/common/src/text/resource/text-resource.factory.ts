import {
  Boolean2,
  Nothing,
  Resource,
  String2,
  TextData,
  TextRange,
  TextReference,
  TextResource,
  nothing,
  textData,
  textResourceRange,
} from '#common';
import {$} from '#typing';
import {readFileSync, statSync} from 'node:fs';

export function textResourceFromData(location: String2 | Nothing, data: String2): TextResource {
  return {
    $: $.TextResource,
    location,
    data: textData(data),

    equals(other: Resource<TextData>): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    reference(range: TextRange): TextReference {
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
