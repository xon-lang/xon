import { SourceRange } from '../util/source-range';

export interface Tree {
  sourceReference: SourceRange;
  toString(): string;
}
