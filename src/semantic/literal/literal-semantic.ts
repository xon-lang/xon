import { Something } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface LiteralValueSemantic extends ValueSemantic {
  // todo
  // $: $Semantic.LITERAL,
  value: Something;
}

export function literalValueSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  value: Something,
): LiteralValueSemantic {
  return {
    $: $Semantic.VALUE,
    reference,
    declaration,
    generics: [],
    arguments: [],
    value,
  };
}
