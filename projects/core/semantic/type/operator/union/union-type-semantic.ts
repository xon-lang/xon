import {Boolean2, String2} from '../../../../lib/core';
import {SourceReference} from '../../../../source/source-reference';
import {$Semantic} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';

export interface UnionTypeSemantic extends TypeSemantic {
  $: $Semantic.UNION_TYPE;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function unionTypeSemantic(
  reference: SourceReference,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $Semantic.UNION_TYPE,
    reference,
    left,
    right,

    eq(type: TypeSemantic): Boolean2 {
      return false;
    },

    is(type: TypeSemantic): Boolean2 {
      return this.eq(type);
    },

    attributes(): Record<String2, TypeSemantic[]> {
      return {};
    },
  };

  return semantic;
}
