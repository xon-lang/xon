import { SourceReference } from './util/source-reference';

export interface Tree {
  toString(): string;
  sourceReference: SourceReference;
}
