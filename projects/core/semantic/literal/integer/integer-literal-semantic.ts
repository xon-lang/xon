import {Boolean2, Integer} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface IntegerLiteralSemantic extends LiteralSemantic {
  $: $Semantic.INTEGER_LITERAL;
  // todo use inner presentation ???
  value: Integer;
}

export function integerLiteralSemantic(
  reference: SourceReference,
  type: DeclarationTypeSemantic,
  value: IntegerLiteralSemantic['value'],
): IntegerLiteralSemantic {
  const semantic: IntegerLiteralSemantic = {
    $: $Semantic.INTEGER_LITERAL,
    reference,
    type,
    value,

    eq(other: LiteralSemantic): Boolean2 {
      if (semanticIs<IntegerLiteralSemantic>(other, $Semantic.INTEGER_LITERAL)) {
        return this.value === other.value;
      }

      return false;
    },
  };

  return semantic;
}
