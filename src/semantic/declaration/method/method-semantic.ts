import {Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {DeclarationSemantic} from '../declaration-semantic';
import {GenericSemantic} from '../generic/generic-semantic';
import {ParameterSemantic} from '../parameter/parameter-semantic';

export interface MethodSemantic extends DeclarationSemantic {
  $: $Semantic.METHOD;
  generics: (GenericSemantic | Nothing)[];
  parameters: (ParameterSemantic | Nothing)[];
}

export function methodSemantic(reference: SourceReference, name: String2): MethodSemantic {
  return {
    $: $Semantic.METHOD,
    reference,
    name,
    usages: [],
    generics: [],
    parameters: [],
  };
}
