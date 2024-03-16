import {Anything, Nothing, nothing} from '../../lib/core';
import {SourceReference} from '../../source/source-reference';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic extends Semantic {
  type: TypeSemantic | Nothing;

  evaluate(): Anything;
}

export function valueSemantic(reference: SourceReference, type: TypeSemantic): ValueSemantic {
  return {
    $: $Semantic.VALUE,
    reference,
    type,

    evaluate() {
      return nothing;
    },
  };
}
