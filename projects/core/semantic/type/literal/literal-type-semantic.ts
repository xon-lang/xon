import {Boolean2, String2} from '../../../lib/core';
import {LiteralSemantic} from '../../literal/literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {TypeSemantic} from '../type-semantic';

export interface LiteralTypeSemantic extends TypeSemantic {
  $: $Semantic.LITERAL_TYPE;
  literal: LiteralSemantic;
}

export function literalTypeSemantic(literal: LiteralSemantic): LiteralTypeSemantic {
  const semantic: LiteralTypeSemantic = {
    $: $Semantic.LITERAL_TYPE,
    reference: literal.reference,
    literal,

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<LiteralTypeSemantic>(type, $Semantic.LITERAL_TYPE)) {
        return this.literal.eq(type.literal);
      }

      return false;
    },

    is(type: TypeSemantic): Boolean2 {
      return this.eq(type);
    },

    attributes(): Record<String2, TypeSemantic[]> {
      return {
        // length: [semantic],
      };
    },
  };

  return semantic;
}
