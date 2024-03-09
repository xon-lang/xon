import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface GenericSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC;
  type: TypeSemantic | Nothing;
  value: TypeSemantic | Nothing;
}

export function genericSemantic(reference: SourceReference, name: String2): GenericSemantic {
  return {
    $: $Semantic.GENERIC,
    reference,
    name,
    usages: [],
    type: nothing,
    value: nothing,
  };
}
