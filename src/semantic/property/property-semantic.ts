import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface PropertySemantic extends DeclarationSemantic {
  $: $Semantic.PROPERTY;
  type: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function propertySemantic(
  reference: SourceReference,
  name: String2,
  type: UsageSemantic | Nothing,
  value: UsageSemantic | Nothing,
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
