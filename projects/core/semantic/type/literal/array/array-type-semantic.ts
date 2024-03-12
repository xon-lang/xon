import {Boolean2, Nothing, String2} from '../../../../lib/core';
import {SourceReference} from '../../../../source/source-reference';
import {$Semantic, semanticIs} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';

export interface ArrayTypeSemantic extends TypeSemantic {
  $: $Semantic.ARRAY;
  type: TypeSemantic;
  size: IntegerTypeSemantic | Nothing;
}

export function arrayTypeSemantic(
  reference: SourceReference,
  type: TypeSemantic,
  size: IntegerTypeSemantic | Nothing,
): ArrayTypeSemantic {
  const semantic: ArrayTypeSemantic = {
    $: $Semantic.ARRAY,
    reference,
    type,
    size,

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<ArrayTypeSemantic>(type, $Semantic.ARRAY)) {
        return this.type.eq(type);
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
