import { String2 } from '../../lib/core';
import { Source } from '../../source/source';
import { SourcePosition } from '../../source/source-position';
import { Semantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface DeclarationSemantic extends Semantic {
  name: String2;
  source: Source;
  position: SourcePosition;
  usages: ValueSemantic[];
  parameters: DeclarationSemantic[];
  restriction: ValueSemantic | null;
  attributes: Record<String2, DeclarationSemantic[]>;
}
