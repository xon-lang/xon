import {Boolean2, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {IntegerLiteralSemantic} from '../../literal/integer/integer-literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../type-semantic';

export interface RangeTypeSemantic extends TypeSemantic {
  $: $Semantic.RANGE_TYPE;
  from: IntegerLiteralSemantic;
  to: IntegerLiteralSemantic;
  // step: IntegerTypeSemantic;
}

export function rangeTypeSemantic(
  reference: SourceReference,
  from: IntegerLiteralSemantic,
  to: IntegerLiteralSemantic,
  // step: IntegerTypeSemantic,
): RangeTypeSemantic {
  const semantic: RangeTypeSemantic = {
    $: $Semantic.RANGE_TYPE,
    reference,
    from,
    to,
    // step,

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<RangeTypeSemantic>(type, $Semantic.RANGE_TYPE)) {
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
