import {Array2, Boolean2, String2} from '../../../../lib/core';
import {SourceReference} from '../../../../source/source-reference';
import {$Semantic} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';

export interface NotTypeSemantic extends TypeSemantic {
  $: $Semantic.NOT_TYPE;
  value: TypeSemantic;
}

export function notTypeSemantic(reference: SourceReference, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $Semantic.NOT_TYPE,
    reference,
    value,

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
