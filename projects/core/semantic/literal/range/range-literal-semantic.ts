import {Boolean2, Nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {DeclarationTypeSemantic} from '../../type/declaration/declaration-type-semantic';
import {IntegerLiteralSemantic} from '../integer/integer-literal-semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface RangeLiteralSemantic extends LiteralSemantic {
  $: $Semantic.RANGE_LITERAL;
  value: {
    from: IntegerLiteralSemantic;
    to: IntegerLiteralSemantic;
    step: IntegerLiteralSemantic | Nothing;
  };
}

export function rangeLiteralSemantic(
  reference: SourceReference,
  type: DeclarationTypeSemantic,
  value: RangeLiteralSemantic['value'],
): RangeLiteralSemantic {
  const semantic: RangeLiteralSemantic = {
    $: $Semantic.RANGE_LITERAL,
    reference,
    type,
    value,

    eq(semantic: LiteralSemantic): Boolean2 {
      if (semanticIs<RangeLiteralSemantic>(semantic, $Semantic.RANGE_LITERAL)) {
        return this.value.from.value === semantic.value.from.value || this.value.to.value === semantic.value.to.value;
      }

      return false;
    },
  };

  return semantic;
}
