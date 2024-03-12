import { Source } from './source';
import { SourcePosition } from './source-position';

export interface SourceReference {
  source: Source;
  position: SourcePosition;
}

export function sourceReference(source: Source, position: SourcePosition): SourceReference {
  return {
    source,
    position,
  };
}
