import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface ConstantSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  base: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function constantSemantic(
  reference: SourceReference,
  name: String2,
  base: UsageSemantic | Nothing,
  value: UsageSemantic | Nothing,
): ConstantSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    base,
    value,
  };
}

export function constantShallowSemantic(reference: SourceReference, name: String2): ConstantSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    base: nothing,
    value: nothing,
  };
}
