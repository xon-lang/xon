import {readFileSync, statSync} from 'fs';
import {Boolean2, Nothing, String2, nothing} from '../../../lib/core';
import {$Resource, Resource, resourceIs} from '../resource';
import {TextResourceRange} from './text-resource-range';

export interface TextResource extends Resource {
  $: $Resource.TEXT;
  data: String2;

  getRangeText(range: TextResourceRange): String2;
}

export function textResourceFrom(location: String2 | Nothing, data: String2): TextResource {
  return {
    $: $Resource.TEXT,
    location,
    data,

    eq(other: Resource): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return resourceIs<TextResource>(other, $Resource.TEXT) && this.data === other.data;
    },

    getRangeText({start, stop}: TextResourceRange): String2 {
      return this.data.slice(start.index, stop.index);
    },
  };
}

export function textResourceFromFilePath(location: String2): TextResource | Nothing {
  try {
    if (!statSync(location).isFile()) {
      return nothing;
    }

    const data = readFileSync(location).toString();

    return textResourceFrom(location, data);
  } catch (error) {
    return nothing;
  }
}
