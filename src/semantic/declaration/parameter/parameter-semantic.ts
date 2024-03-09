import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface ParameterSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  type: TypeSemantic | Nothing;
}

export function parameterSemantic(reference: SourceReference, name: String2): ParameterSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    type: nothing,
  };
}
