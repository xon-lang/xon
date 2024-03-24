import {Array2, Boolean2, String2} from '../../../../lib/core';
import {ResourceReference} from '../../../../util/resource/resource-reference';
import {$Semantic} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';

export interface ComplementTypeSemantic extends TypeSemantic {
  $: $Semantic.COMPLEMENT_TYPE;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function complementTypeSemantic(
  reference: ResourceReference,
  left: TypeSemantic,
  right: TypeSemantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $Semantic.COMPLEMENT_TYPE,
    reference,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
