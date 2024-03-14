import {Boolean2} from '../lib/core';
import {Source} from './source';
import {SourceRange} from './source-range';

export interface SourceReference {
  source: Source;
  range: SourceRange;

  eq(reference: SourceReference): Boolean2;
}

export function sourceReference(source: Source, range: SourceRange): SourceReference {
  return {
    source,
    range,

    eq(reference: SourceReference): Boolean2 {
      return this.source.eq(reference.source) && this.range.eq(reference.range);
    },
  };
}
