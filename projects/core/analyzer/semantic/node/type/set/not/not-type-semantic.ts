import {$Node} from '../../../../../../$';
import {Array2, Boolean2, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type-semantic';

export interface NotTypeSemantic extends TypeSemantic {
  $: $Node.NotTypeSemantic;
  value: TypeSemantic;
}

export function notTypeSemantic(reference: TextResourceRange, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $Node.NotTypeSemantic,
    reference,
    value,

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
