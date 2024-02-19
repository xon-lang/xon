import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface GenericDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC_DECLARATION;
  base: ValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export function genericDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  base: ValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
): GenericDeclarationSemantic {
  return {
    $: $Semantic.GENERIC_DECLARATION,
    reference,
    name,
    usages: [],
    base,
    value,
  };
}

export function genericShallowDeclarationSemantic(
  reference: SourceReference,
  name: String2,
): GenericDeclarationSemantic {
  return {
    $: $Semantic.GENERIC_DECLARATION,
    reference,
    name,
    usages: [],
    base: nothing,
    value: nothing,
  };
}
