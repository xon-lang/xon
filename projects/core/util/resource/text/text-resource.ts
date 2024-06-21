import {readFileSync, statSync} from 'fs';
import {Nothing, String2, nothing} from '../../../../lib/types';
import {$Resource, Resource} from '../resource';
import {TextPosition} from './text-position';
import {TextRange} from './text-range';

export interface TextResource extends Resource {
  $: $Resource.TEXT;
  data: String2;

  getRangeText(range: TextRange): String2;
  getRangeText2(start: TextPosition, stop: TextPosition): String2;
}

export function textResourceFrom(location: String2 | Nothing, data: String2): TextResource {
  return {
    $: $Resource.TEXT,
    location,
    data,

    getRangeText({start, stop}: TextRange): String2 {
      return this.data.slice(start.index, stop.index);
    },

    getRangeText2(start: TextPosition, stop: TextPosition): String2 {
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
