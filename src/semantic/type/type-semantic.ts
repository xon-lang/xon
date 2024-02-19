import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { GenericDeclarationSemantic } from '../generic/generic-semantic';
import { MethodDeclarationSemantic } from '../method/method-semantic';
import { $Semantic, DeclarationSemantic } from '../semantic';

export interface TypeDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.MODEL;
  generics: (GenericDeclarationSemantic | Nothing)[];
  attributes: Record<String2, MethodDeclarationSemantic[]>;
}

export function typeDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericDeclarationSemantic | Nothing)[],
): TypeDeclarationSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics,
    attributes: {},
  };
}

export function typeShallowDeclarationSemantic(reference: SourceReference, name: String2): TypeDeclarationSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics: [],
    attributes: {},
  };
}
