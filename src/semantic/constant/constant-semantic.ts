import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface ConstantSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  base: ValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export function constantSemantic(
  reference: SourceReference,
  name: String2,
  base: ValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
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
