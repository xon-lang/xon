import {readFileSync, statSync} from 'fs';
import {$} from '../../../$';
import {Boolean2, Nothing, nothing, String2} from '../../../../lib/types';
import {Resource} from '../resource';
import {TextRange} from './text-range';
import {textResourceRange, TextResourceRange} from './text-resource-range';

export interface TextResource extends Resource {
  $: $.TextResource;
  data: String2;

  equals(other: Resource): Boolean2;
  getReference(range: TextRange): TextResourceRange;
  getText(range: TextRange): String2;
}

export function textResourceFromData(location: String2 | Nothing, data: String2): TextResource {
  return {
    $: $.TextResource,
    location,
    data,

    equals(other: Resource): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    getReference(range: TextRange): TextResourceRange {
      return textResourceRange(this, range);
    },

    getText({start, stop}: TextRange): String2 {
      return this.data.slice(start.index, stop.index);
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
