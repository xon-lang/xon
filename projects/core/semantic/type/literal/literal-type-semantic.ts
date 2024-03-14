import {Boolean2, String2} from '../../../lib/core';
import {LiteralSemantic} from '../../literal/literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {getDeclarationAttributes} from '../declaration/declaration-type-semantic';
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

    eq(type: TypeSemantic): Boolean2 {
      if (semanticIs<LiteralTypeSemantic>(type, $Semantic.LITERAL_TYPE)) {
        return this.literal.eq(type.literal);
      }

      return false;
    },

    is(type: TypeSemantic): Boolean2 {
      return this.eq(type) || literal.baseType.is(type);
    },

    attributes(): Record<String2, TypeSemantic[]> {
      return getDeclarationAttributes(context, literal.declaration);
    },
  };

  return semantic;
}
