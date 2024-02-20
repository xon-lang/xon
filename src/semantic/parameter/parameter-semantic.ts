import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface ParameterSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  type: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function parameterSemantic(
  reference: SourceReference,
  name: String2,
  base: UsageSemantic | Nothing,
  value: UsageSemantic | Nothing,
): ParameterSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    type: base,
    value,
  };
}

export function parameterShallowSemantic(reference: SourceReference, name: String2): ParameterSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    type: nothing,
    value: nothing,
  };
}
