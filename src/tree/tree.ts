import { SourceRange } from '../util/source-range';

export interface Tree {
  sourceRange: SourceRange;
  toString(): string;
}
