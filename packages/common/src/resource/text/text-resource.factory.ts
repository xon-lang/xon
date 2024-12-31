import {
  $TextResource,
  Boolean2,
  Nothing,
  Text,
  TextRange,
  TextReference,
  TextResource,
  newText,
  newTextReference,
  nothing,
} from '#common';
import {readFileSync, statSync} from 'node:fs';

export function newTextResource(location: Text | Nothing, data: Text): TextResource {
  return {
    $: $TextResource,
    location,
    data,

    reference(range: TextRange): TextReference {
      return newTextReference(this, range);
    },

    equals(other: TextResource): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    // clone(): TextResource {
    //   return newTextResourceFromData(this.location, this.data);
    // },
  };
}

export function textResourceFromLocation(location: Text): TextResource | Nothing {
  try {
    if (!statSync(location.toNativeString()).isFile()) {
      return nothing;
    }

    const fileContent = readFileSync(location.toNativeString()).toString();
    const data = newText(fileContent);

    return newTextResource(location, data);
  } catch (error) {
    return nothing;
  }
}
