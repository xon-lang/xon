import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {UsageSemantic} from '../../usage/usage-semantic';
import {DeclarationSemantic} from '../declaration-semantic';
import {GenericSemantic} from '../generic/generic-semantic';
import {ParameterSemantic} from '../parameter/parameter-semantic';

export interface AttributeSemantic extends DeclarationSemantic {
  $: $Semantic.ATTRIBUTE;
  generics: (GenericSemantic | Nothing)[] | Nothing;
  parameters: (ParameterSemantic | Nothing)[] | Nothing;
  type: UsageSemantic | Nothing;
  value: UsageSemantic | Nothing;
}

export function attributeSemantic(reference: SourceReference, name: String2): AttributeSemantic {
  return {
    $: $Semantic.ATTRIBUTE,
    reference,
    name,
    usages: [],
    generics: [],
    parameters: [],
    type: nothing,
    value: nothing,
  };
}
