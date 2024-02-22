import { Something } from '../../../lib/core';
import { SourceReference } from '../../../source/source-reference';
import { DeclarationSemantic } from '../../declaration/declaration-semantic';
import { $Semantic } from '../../semantic';
import { UsageSemantic } from '../usage-semantic';

export interface LiteralSemantic extends UsageSemantic {
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
    $: $Semantic.USAGE,
    reference,
    declaration,
    generics: [],
    arguments: [],
    value,
  };
}
