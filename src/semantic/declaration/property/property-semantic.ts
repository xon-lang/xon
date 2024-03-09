import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {UsageSemantic} from '../../usage/usage-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface PropertySemantic extends DeclarationSemantic {
  $: $Semantic.PROPERTY;
  type: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function propertySemantic(reference: SourceReference, name: String2): PropertySemantic {
  return {
    $: $Semantic.PROPERTY,
    reference,
    name,
    usages: [],
    type: nothing,
    value: nothing,
  };
}
