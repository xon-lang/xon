import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface PropertySemantic extends DeclarationSemantic {
  $: $Semantic.PROPERTY;
  type: ValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export function propertySemantic(
  reference: SourceReference,
  name: String2,
  type: ValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
): PropertySemantic {
  return {
    $: $Semantic.PROPERTY,
    reference,
    name,
    usages: [],
    type,
    value,
  };
}
