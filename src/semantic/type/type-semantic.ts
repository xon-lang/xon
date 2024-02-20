import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { GenericSemantic } from '../generic/generic-semantic';
import { MethodSemantic } from '../method/method-semantic';
import { $Semantic } from '../semantic';

export interface TypeSemantic extends DeclarationSemantic {
  $: $Semantic.MODEL;
  generics: (GenericSemantic | Nothing)[];
  attributes: Record<String2, MethodSemantic[]>;
}

export function typeSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericSemantic | Nothing)[],
): TypeSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics,
    attributes: {},
  };
}

export function typeShallowSemantic(reference: SourceReference, name: String2): TypeSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics: [],
    attributes: {},
  };
}
