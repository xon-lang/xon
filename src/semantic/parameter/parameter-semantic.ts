import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface ParameterDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.PARAMETER;
  type: DeclarationSemantic;
  value: ValueSemantic;
}

export function parameterDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  type: DeclarationSemantic,
  value: ValueSemantic,
): ParameterDeclarationSemantic {
  return {
    $: $Semantic.PARAMETER,
    reference,
    name,
    usages: [],
    type,
    value,
  };
}
