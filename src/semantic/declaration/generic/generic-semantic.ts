import { Nothing, String2, nothing } from '../../../lib/core';
import { SourceReference } from '../../../source/source-reference';
import { $Semantic } from '../../semantic';
import { UsageSemantic } from '../../usage/usage-semantic';
import { DeclarationSemantic } from '../declaration-semantic';

export interface GenericSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  type: UsageSemantic | Nothing;
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
    type: base,
    value,
  };
}

export function genericShallowSemantic(reference: SourceReference, name: String2): GenericSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    type: nothing,
    value: nothing,
  };
}
