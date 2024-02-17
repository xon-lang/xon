import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { GenericDeclarationSemantic } from '../generic/generic-semantic';
import { ParameterDeclarationSemantic, ParameterValueSemantic } from '../parameter/parameter-semantic';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface MethodDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.METHOD_DECLARATION;
  generics: GenericDeclarationSemantic[];
  parameters: ParameterDeclarationSemantic[];
}

export interface MethodValueSemantic extends ValueSemantic {
  $: $Semantic.METHOD_VALUE;
  declaration: MethodDeclarationSemantic;
  generics: ValueSemantic[];
  parameters: ParameterValueSemantic[];
}

export function methodDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  generics: GenericDeclarationSemantic[],
  parameters: ParameterDeclarationSemantic[],
): MethodDeclarationSemantic {
  return {
    $: $Semantic.METHOD_DECLARATION,
    reference,
    name,
    usages: [],
    generics,
    parameters,
  };
}

export function methodValueSemantic(
  reference: SourceReference,
  declaration: MethodDeclarationSemantic,
  generics: ValueSemantic[],
  parameters: ParameterValueSemantic[],
): MethodValueSemantic {
  const semantic: MethodValueSemantic = {
    $: $Semantic.METHOD_VALUE,
    reference,
    declaration,
    generics,
    parameters,
  };

  declaration.usages.push(semantic);

  return semantic;
}
