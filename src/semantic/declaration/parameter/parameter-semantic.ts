import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {UsageSemantic} from '../../usage/usage-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface ParameterSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  type: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function parameterSemantic(reference: SourceReference, name: String2): ParameterSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    type: nothing,
    value: nothing,
  };
}
