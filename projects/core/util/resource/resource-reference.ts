import {Boolean2, String2} from '../../lib/core';
import {TextRange} from './text/text-range';
import {TextResource} from './text/text-resource';

export interface TextResourceReference {
  resource: TextResource;
  range: TextRange;

  positionEquals(reference: TextResourceReference): Boolean2;
  rangeEquals(reference: TextResourceReference): Boolean2;
  getText(): String2;
}

export function textResourceReference(
  resource: TextResourceReference['resource'],
  range: TextResourceReference['range'],
): TextResourceReference {
  return {
    resource,
    range,

    positionEquals(other: TextResourceReference): Boolean2 {
      return this.resource.eq(other.resource) && this.range.start.index === other.range.start.index;
    },

    rangeEquals(other: TextResourceReference): Boolean2 {
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
