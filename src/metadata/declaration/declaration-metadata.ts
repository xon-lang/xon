import { String } from '../../lib/core';
import { SourceRange } from '../../util/source-range';

export interface DeclarationMetadata {
  sourceRange: SourceRange;
  name: String;

  is(metadata: DeclarationMetadata): boolean;
  attributes(): DeclarationMetadata[];
}
