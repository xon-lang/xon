import {Nothing} from '../../lib/core';
import {ResourceReference} from '../../util/resource/resource-reference';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';

export interface ValueSemantic extends Semantic {
  type: TypeSemantic | Nothing;
}

export function valueSemantic(reference: ResourceReference, type: TypeSemantic): ValueSemantic {
  return {
    $: $Semantic.VALUE,
    reference,
    type,
  };
}
