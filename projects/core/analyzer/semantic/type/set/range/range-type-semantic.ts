import {Array2, Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic, isTypeDeclarationSemantic} from '../../../declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../../node/semantic-node';
import {IntegerTypeSemantic} from '../../integer/integer-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../set';

export interface RangeTypeSemantic extends TypeSemantic {
  $: $Semantic.RANGE_TYPE;
  declaration: DeclarationSemantic;
  from: TypeSemantic;
  to: TypeSemantic;
  step: TypeSemantic | Nothing;
}

export function rangeTypeSemantic(
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
  from: RangeTypeSemantic['from'],
  to: RangeTypeSemantic['to'],
  step: RangeTypeSemantic['step'],
): RangeTypeSemantic {
  const semantic: RangeTypeSemantic = {
    $: $Semantic.RANGE_TYPE,
    reference,
    declaration,
    from,
    to,
    step,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (semanticIs<RangeTypeSemantic>(other, $Semantic.RANGE_TYPE)) {
        if (
          semanticIs<IntegerTypeSemantic>(this.from, $Semantic.INTEGER_TYPE) &&
          semanticIs<IntegerTypeSemantic>(other.from, $Semantic.INTEGER_TYPE) &&
          semanticIs<IntegerTypeSemantic>(this.to, $Semantic.INTEGER_TYPE) &&
          semanticIs<IntegerTypeSemantic>(other.to, $Semantic.INTEGER_TYPE)
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      if (isTypeDeclarationSemantic(other)) {
        return this.declaration.eq(other) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (semanticIs<RangeTypeSemantic>(other, $Semantic.INTEGER_TYPE)) {
        return this.from === other.from && this.to === other.to && this.step === other.step;
      }

      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
