import {Array2, Boolean2, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-reference';
import {$Semantic} from '../../../node/semantic-node';
import {TypeSemantic} from '../../type-semantic';

export interface NotTypeSemantic extends TypeSemantic {
  $: $Semantic.NOT_TYPE;
  value: TypeSemantic;
}

export function notTypeSemantic(reference: TextResourceRange, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $Semantic.NOT_TYPE,
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
