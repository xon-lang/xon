import { SourceReference } from './util/source-reference';

export interface Node {
  toString(): string;
  sourceReference: SourceReference;
}
