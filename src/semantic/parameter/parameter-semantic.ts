import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface ParameterSemantic extends DeclarationSemantic {
  $: $Semantic.PARAMETER;
  type: DeclarationSemantic;
  value: UsageSemantic;
}

export function parameterSemantic(
  reference: SourceReference,
  name: String2,
  type: DeclarationSemantic,
  value: UsageSemantic,
): ParameterSemantic {
  return {
    $: $Semantic.PARAMETER,
    reference,
    name,
    usages: [],
    type,
    value,
  };
}
