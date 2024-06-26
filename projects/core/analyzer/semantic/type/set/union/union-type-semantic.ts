import {Array2, Boolean2, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {$Semantic} from '../../../node/semantic-node';
import {TypeSemantic} from '../../type-semantic';

export interface UnionTypeSemantic extends TypeSemantic {
  $: $Semantic.UNION_TYPE;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function unionTypeSemantic(
  reference: TextResourceRange,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $Semantic.UNION_TYPE,
    reference,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
