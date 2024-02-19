import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { GenericDeclarationSemantic } from '../generic/generic-semantic';
import { MethodDeclarationSemantic } from '../method/method-semantic';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface ModelDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.MODEL_DECLARATION;
  generics: (GenericDeclarationSemantic | Nothing)[];
  base: ValueSemantic | Nothing;
  attributes: Record<String2, MethodDeclarationSemantic[]>;
}

export function modelDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericDeclarationSemantic | Nothing)[],
  base: ValueSemantic | Nothing,
  attributes: Record<String2, MethodDeclarationSemantic[]>,
): ModelDeclarationSemantic {
  return {
    $: $Semantic.MODEL_DECLARATION,
    reference,
    name,
    usages: [],
    generics,
    base,
    attributes,
  };
}

export function modelShallowDeclarationSemantic(reference: SourceReference, name: String2): ModelDeclarationSemantic {
  return {
    $: $Semantic.MODEL_DECLARATION,
    reference,
    name,
    usages: [],
    generics: [],
    base: nothing,
    attributes: {},
  };
}
