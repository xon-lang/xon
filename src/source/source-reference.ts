import { Source } from './source';
import { SourcePosition } from './source-position';

export interface SourceReference {
  source: Source;
  position: SourcePosition;
}
