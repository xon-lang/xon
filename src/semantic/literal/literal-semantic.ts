import { Something } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface LiteralSemantic extends ValueSemantic {
  // todo
  // $: $Semantic.LITERAL,
  value: Something;
}

export function literalSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  value: Something,
): LiteralSemantic {
  return {
    $: $Semantic.VALUE,
    reference,
    declaration,
    generics: [],
    arguments: [],
    value,
  };
}