import {$} from '../../../../../../$';
import {Array2, Boolean2, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface ComplementTypeSemantic extends SetTypeSemantic {
  $: $.ComplementTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function complementTypeSemantic(
  reference: TextResourceRange,
  left: TypeSemantic,
  right: TypeSemantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $.ComplementTypeSemantic,
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
