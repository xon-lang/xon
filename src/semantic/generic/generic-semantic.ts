import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface GenericSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  base: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function genericSemantic(
  reference: SourceReference,
  name: String2,
  base: UsageSemantic | Nothing,
  value: UsageSemantic | Nothing,
): GenericSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    base,
    value,
  };
}

export function genericShallowSemantic(reference: SourceReference, name: String2): GenericSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    base: nothing,
    value: nothing,
  };
}
