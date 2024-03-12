import {Boolean2, Integer, String2} from '../../../../lib/core';
import {SourceReference} from '../../../../source/source-reference';
import {$Semantic, semanticIs} from '../../../semantic';
import {TypeSemantic} from '../../type-semantic';

export interface IntegerTypeSemantic extends TypeSemantic {
  $: $Semantic.INTEGER;
  value: Integer;
}

export function integerTypeSemantic(reference: SourceReference, value: Integer): IntegerTypeSemantic {
  const semantic: IntegerTypeSemantic = {
    $: $Semantic.INTEGER,
    reference,
    value,

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<IntegerTypeSemantic>(type, $Semantic.INTEGER)) {
        return this.value === type.value;
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
