import {Array2, Boolean2, Nothing, String2} from '../../../../lib/core';
import {TextResourceReference} from '../../../../util/resource/resource-reference';
import {TypeDeclarationSemantic} from '../../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../../semantic';
import {IntegerTypeSemantic} from '../../integer/integer-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../set';

export interface RangeTypeSemantic extends TypeSemantic {
  $: $Semantic.RANGE_TYPE;
  declaration: TypeDeclarationSemantic;
  from: TypeSemantic;
  to: TypeSemantic;
  step: TypeSemantic | Nothing;
}

export function rangeTypeSemantic(
  reference: TextResourceReference,
  declaration: TypeDeclarationSemantic,
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

      if (semanticIs<TypeDeclarationSemantic>(other, $Semantic.TYPE_DECLARATION)) {
        return this.declaration.eq(other) || (this.declaration.baseType?.is(other) ?? false);
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
