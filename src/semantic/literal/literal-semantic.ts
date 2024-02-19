import { Something } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface LiteralValueSemantic extends ValueSemantic {
  value: Something;
}

export function literalValueSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  value: Something,
): LiteralValueSemantic {
  return {
    $: $Semantic.LITERAL,
    reference,
    declaration,
    value,
  };
}
