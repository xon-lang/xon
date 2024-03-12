import {Source} from './source';
import {SourceRange} from './source-range';

export interface SourceReference {
  source: Source;
  range: SourceRange;
}

export function sourceReference(source: Source, range: SourceRange): SourceReference {
  return {
    source,
    range,
  };
}
