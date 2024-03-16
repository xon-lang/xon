import {Boolean2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface ArrayLiteralSemantic extends LiteralSemantic {
  $: $Semantic.RANGE_LITERAL;
  value: LiteralSemantic[];
}

export function arrayLiteralSemantic(
  reference: SourceReference,
  type: DeclarationTypeSemantic,
  value: ArrayLiteralSemantic['value'],
): ArrayLiteralSemantic {
  const semantic: ArrayLiteralSemantic = {
    $: $Semantic.RANGE_LITERAL,
    reference,
    type,
    value,

    eq(other: LiteralSemantic): Boolean2 {
      if (
        semanticIs<ArrayLiteralSemantic>(other, $Semantic.RANGE_LITERAL) &&
        this.value.length === other.value.length
      ) {
        return this.value.every((x, i) => x.eq(other.value[i]));
      }

      return false;
    },
  };

  return semantic;
}
