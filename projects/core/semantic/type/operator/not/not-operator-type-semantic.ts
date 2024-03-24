import {Array2, Boolean2, String2} from '../../../../lib/core';
import {SourceReference} from '../../../../source/source-reference';
import {$Semantic} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';
import {OperatorTypeSemantic} from '../operator-type-semantic';

export interface NotOperatorTypeSemantic extends OperatorTypeSemantic {
  $: $Semantic.NOT_OPERATOR_TYPE;
  value: TypeSemantic;
}

export function notTypeSemantic(
  reference: SourceReference,
  value: TypeSemantic,
  right: TypeSemantic,
): NotOperatorTypeSemantic {
  const semantic: NotOperatorTypeSemantic = {
    $: $Semantic.NOT_OPERATOR_TYPE,
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
