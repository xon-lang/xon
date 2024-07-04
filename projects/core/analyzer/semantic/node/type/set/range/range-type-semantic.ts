import {$, is, isSetOperatorTypeSemantic} from '../../../../../../$';
import {Array2, Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic, isTypeDeclarationSemantic} from '../../../declaration/declaration-semantic';
import {IntegerTypeSemantic} from '../../integer/integer-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {isInSet} from '../set';

export interface RangeTypeSemantic extends TypeSemantic {
  $: $.RangeTypeSemantic;
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
    $: $.RangeTypeSemantic,
    reference,
    declaration,
    from,
    to,
    step,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (is<RangeTypeSemantic>(other, $.RangeTypeSemantic)) {
        if (
          is<IntegerTypeSemantic>(this.from, $.IntegerTypeSemantic) &&
          is<IntegerTypeSemantic>(other.from, $.IntegerTypeSemantic) &&
          is<IntegerTypeSemantic>(this.to, $.IntegerTypeSemantic) &&
          is<IntegerTypeSemantic>(other.to, $.IntegerTypeSemantic)
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      if (isTypeDeclarationSemantic(other)) {
        return this.declaration.eq(other) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is<RangeTypeSemantic>(other, $.IntegerTypeSemantic)) {
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
