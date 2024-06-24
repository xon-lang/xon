import {Boolean2, String2} from '../../../../lib/types';
import {TextRange} from './text-range';
import {TextResource} from './text-resource';

// todo is it the same as token node model ???
export interface TextResourceRange {
  resource: TextResource;
  range: TextRange;

  positionEquals(reference: TextResourceRange): Boolean2;
  rangeEquals(reference: TextResourceRange): Boolean2;
  getText(): String2;
}

export function textResourceRange(
  resource: TextResourceRange['resource'],
  range: TextResourceRange['range'],
): TextResourceRange {
  return {
    resource,
    range,

    positionEquals(other: TextResourceRange): Boolean2 {
      return this.resource.eq(other.resource) && this.range.start.index === other.range.start.index;
    },

    rangeEquals(other: TextResourceRange): Boolean2 {
      return (
        this.resource.eq(other.resource) &&
        this.range.start.index === other.range.start.index &&
        this.range.stop.index === other.range.stop.index
      );
    },

    getText(): String2 {
      return this.resource.getRangeText(this.range);
    },
  };
}
