import {Boolean2, String2} from '../../lib/core';
import {TextResource} from './text/text-resource';
import {TextResourceRange} from './text/text-resource-range';

export interface TextResourceReference {
  resource: TextResource;
  range: TextResourceRange;

  eq(reference: TextResourceReference): Boolean2;
  getText(): String2;
}

export function textResourceReference(
  resource: TextResourceReference['resource'],
  range: TextResourceReference['range'],
): TextResourceReference {
  return {
    resource,
    range,

    eq(other: TextResourceReference): Boolean2 {
      return this.resource.eq(other.resource) && this.range.eq(other.range);
    },

    getText(): String2 {
      return this.resource.getRangeText(this.range);
    },
  };
}
