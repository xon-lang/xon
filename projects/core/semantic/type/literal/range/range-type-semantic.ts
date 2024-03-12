import {Boolean2, String2} from '../../../../lib/core';
import {SourceReference} from '../../../../source/source-reference';
import {$Semantic, semanticIs} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';

export interface RangeTypeSemantic extends TypeSemantic {
  $: $Semantic.RANGE;
  from: IntegerTypeSemantic;
  to: IntegerTypeSemantic;
  // step: IntegerTypeSemantic;
}

export function rangeTypeSemantic(
  reference: SourceReference,
  from: IntegerTypeSemantic,
  to: IntegerTypeSemantic,
  // step: IntegerTypeSemantic,
): RangeTypeSemantic {
  const semantic: RangeTypeSemantic = {
    $: $Semantic.RANGE,
    reference,
    from,
    to,
    // step,

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<RangeTypeSemantic>(type, $Semantic.RANGE)) {
        return this.from.value === type.from.value || this.to.value === type.to.value;
      }

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
