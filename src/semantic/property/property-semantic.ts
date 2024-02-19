import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface PropertyDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.PROPERTY;
  type: ValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export function propertyDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  type: ValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
): PropertyDeclarationSemantic {
  return {
    $: $Semantic.PROPERTY,
    reference,
    name,
    usages: [],
    type,
    value,
  };
}
