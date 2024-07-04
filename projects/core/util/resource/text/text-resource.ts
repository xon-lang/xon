import {readFileSync, statSync} from 'fs';
import {$} from '../../../$';
import {Boolean2, Nothing, String2, nothing} from '../../../../lib/types';
import {Resource} from '../resource';
import {TextRange} from './text-range';

export interface TextResource extends Resource {
  $: $.TextResource;
  data: String2;

  eq(other: Resource): Boolean2;
  getText(range: TextRange): String2;
}

export function textResourceFrom(location: String2 | Nothing, data: String2): TextResource {
  return {
    $: $.TextResource,
    location,
    data,

    eq(other: Resource): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    getText({start, stop}: TextRange): String2 {
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
