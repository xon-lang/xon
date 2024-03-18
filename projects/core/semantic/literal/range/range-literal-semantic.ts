import {Anything, Boolean2, Nothing, Range2} from '../../../lib/core';
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

    eq(other: LiteralSemantic): Boolean2 {
      if (semanticIs<RangeLiteralSemantic>(other, $Semantic.RANGE_LITERAL)) {
        return this.value.from.value === other.value.from.value || this.value.to.value === other.value.to.value;
      }

      return false;
    },

    evaluate(): Range2<Anything, Anything> {
      return {
        from: this.value.from.evaluate(),
        to: this.value.to.evaluate(),
      };
    },
  };

  return semantic;
}
