import {Nothing} from '../../lib/core';
import {SourceReference} from '../../source/source-reference';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic extends Semantic {
  type: TypeSemantic | Nothing;
}

export function valueSemantic(reference: SourceReference, type: TypeSemantic): ValueSemantic {
  return {
    $: $Semantic.VALUE,
    reference,
    type,
  };
}
