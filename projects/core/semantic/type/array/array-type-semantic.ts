import {Boolean2, Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {IntegerLiteralSemantic} from '../../literal/integer/integer-literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../type-semantic';

export interface ArrayTypeSemantic extends TypeSemantic {
  $: $Semantic.ARRAY_TYPE;
  type: TypeSemantic;
  size: IntegerLiteralSemantic | Nothing;
}

export function arrayTypeSemantic(
  reference: SourceReference,
  type: TypeSemantic,
  size: IntegerLiteralSemantic | Nothing,
): ArrayTypeSemantic {
  const semantic: ArrayTypeSemantic = {
    $: $Semantic.ARRAY_TYPE,
    reference,
    type,
    size,

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<ArrayTypeSemantic>(type, $Semantic.ARRAY_TYPE)) {
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
