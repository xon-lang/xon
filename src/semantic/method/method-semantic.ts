import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { GenericDeclarationSemantic } from '../generic/generic-semantic';
import { ParameterDeclarationSemantic } from '../parameter/parameter-semantic';
import { $Semantic, DeclarationSemantic } from '../semantic';

export interface MethodDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.METHOD;
  generics: (GenericDeclarationSemantic | Nothing)[];
  parameters: (ParameterDeclarationSemantic | Nothing)[];
}

export function methodDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericDeclarationSemantic | Nothing)[],
  parameters: (ParameterDeclarationSemantic | Nothing)[],
): MethodDeclarationSemantic {
  return {
    $: $Semantic.METHOD,
    reference,
    name,
    usages: [],
    generics,
    parameters,
  };
}
