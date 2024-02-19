import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface GenericSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  base: ValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export function genericSemantic(
  reference: SourceReference,
  name: String2,
  base: ValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
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
