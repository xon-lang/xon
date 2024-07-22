import {Boolean2, String2} from '../../../../lib/types';
import {TextRange} from './text-range';
import {TextResource} from './text-resource';

export interface TextResourceRange {
  resource: TextResource;
  range: TextRange;

  equals(reference: TextResourceRange): Boolean2;
  getText(): String2;
}

export function textResourceRange(
  resource: TextResourceRange['resource'],
  range: TextResourceRange['range'],
): TextResourceRange {
  return {
    resource,
    range,

    equals(other: TextResourceRange): Boolean2 {
      return this.resource.equals(other.resource) && this.range.equals(other.range);
    },

    getText(): String2 {
      return this.resource.getText(this.range);
    },
  };
}
