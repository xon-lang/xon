import { Nothing, String2, nothing } from '../../../lib/core';
import { SourceReference } from '../../../source/source-reference';
import { $Semantic } from '../../semantic';
import { UsageSemantic } from '../../usage/usage-semantic';
import { DeclarationSemantic } from '../declaration-semantic';
import { GenericSemantic } from '../generic/generic-semantic';
import { ParameterSemantic } from '../parameter/parameter-semantic';

export interface ConstantSemantic extends DeclarationSemantic {
  $: $Semantic.CONSTANT;
  generics: (GenericSemantic | Nothing)[] | Nothing;
  parameters: (ParameterSemantic | Nothing)[] | Nothing;
  type: UsageSemantic | Nothing;
  assign: UsageSemantic | Nothing;
}

export function constantSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericSemantic | Nothing)[] | Nothing,
  parameters: (ParameterSemantic | Nothing)[] | Nothing,
  type: UsageSemantic | Nothing,
  assign: UsageSemantic | Nothing,
): ConstantSemantic {
  return {
    $: $Semantic.CONSTANT,
    reference,
    usages: [],
    name,
    generics,
    parameters,
    type: type,
    assign: assign,
  };
}

export function constantShallowSemantic(reference: SourceReference, name: String2): ConstantSemantic {
  return {
    $: $Semantic.CONSTANT,
    reference,
    usages: [],
    name,
    generics: nothing,
    parameters: nothing,
    type: nothing,
    assign: nothing,
  };
}
