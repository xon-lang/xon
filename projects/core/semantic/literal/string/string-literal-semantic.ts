import {Boolean2, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface StringLiteralSemantic extends LiteralSemantic {
  $: $Semantic.STRING_LITERAL;
  value: String2;
}

export function stringLiteralUsageSemantic(reference: SourceReference, value: String2): StringLiteralSemantic {
  const semantic: StringLiteralSemantic = {
    $: $Semantic.STRING_LITERAL,
    reference,
    value,

    eq(semantic: LiteralSemantic): Boolean2 {
      if (semanticIs<StringLiteralSemantic>(semantic, $Semantic.INTEGER_LITERAL)) {
        return this.value === semantic.value;
      }

      return false;
    },
  };

  return semantic;
}
