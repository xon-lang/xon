import {readFileSync, statSync} from 'fs';
import {$} from '../../../$';
import {Boolean2, Nothing, nothing, String2} from '../../../../lib/types';
import {textData, TextData} from '../../data/text-data';
import {Resource} from '../resource';
import {TextRange} from './text-range';
import {textResourceRange, TextResourceRange} from './text-resource-range';

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
