import {Array2, Boolean2, String2} from '../../../lib/core';
import {LiteralSemantic} from '../../literal/literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../type-semantic';

export interface LiteralTypeSemantic extends TypeSemantic {
  $: $Semantic.LITERAL_TYPE;
  literal: LiteralSemantic;
}

export function literalTypeSemantic(context: SemanticContext, literal: LiteralSemantic): LiteralTypeSemantic {
  const semantic: LiteralTypeSemantic = {
    $: $Semantic.LITERAL_TYPE,
    reference: literal.reference,
    literal,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other) || literal.type.is(other);
    },

    eq(other: TypeSemantic): Boolean2 {
      if (semanticIs<LiteralTypeSemantic>(other, $Semantic.LITERAL_TYPE)) {
        return this.literal.eq(other.literal);
      }

      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
      // return getDeclarationAttributes(context, literal.declaration);
    },
  };

  return semantic;
}
