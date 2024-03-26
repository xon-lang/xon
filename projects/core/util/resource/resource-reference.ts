import {Boolean2} from '../../lib/core';
import {SourceRange} from '../../source/source-range';
import {TextResource} from './text/text-resource';

export interface TextResourceReference {
  resource: TextResource;
  range: SourceRange;

  eq(reference: TextResourceReference): Boolean2;
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
  };
}
