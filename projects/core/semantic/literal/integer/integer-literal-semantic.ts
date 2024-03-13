import {Boolean2, Integer} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface IntegerLiteralSemantic extends LiteralSemantic {
  $: $Semantic.INTEGER_TYPE;
  value: Integer;
}

export function integerLiteralUsageSemantic(reference: SourceReference, value: Integer): IntegerLiteralSemantic {
  const semantic: IntegerLiteralSemantic = {
    $: $Semantic.INTEGER_TYPE,
    reference,
    value,

    eq(semantic: LiteralSemantic): Boolean2 {
      if (semanticIs<IntegerLiteralSemantic>(semantic, $Semantic.LITERAL_TYPE)) {
        return this.value === semantic.value;
      }

      return false;
    },
  };

  return semantic;
}
