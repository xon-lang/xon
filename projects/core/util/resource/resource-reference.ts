import {Boolean2, Nothing, String2} from '../../lib/core';
import {SourceRange} from '../../source/source-range';

export interface ResourceReference {
  location: String2 | Nothing;
  range: SourceRange;

  eq(reference: ResourceReference): Boolean2;
}

export function resourceReference(
  location: ResourceReference['location'],
  range: ResourceReference['range'],
): ResourceReference {
  return {
    location,
    range,

    eq(other: ResourceReference): Boolean2 {
      return this.location === other.location && this.range.eq(other.range);
    },
  };
}
