import { SourceReference } from '../util/source-reference';

export interface Tree {
  sourceReference: SourceReference;
  toString(): string;
}
