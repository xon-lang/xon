import {$, is, isSetOperatorTypeSemantic} from '../../../../../../$';
import {Boolean2, Nothing} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../../declaration-manager';
import {DeclarationSemantic, isTypeDeclarationSemantic} from '../../../declaration/declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {isInSet, SetTypeSemantic} from '../set';

export interface RangeTypeSemantic extends SetTypeSemantic {
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

      if (is(other, $.RangeTypeSemantic)) {
        if (
          is(this.from, $.IntegerTypeSemantic) &&
          is(other.from, $.IntegerTypeSemantic) &&
          is(this.to, $.IntegerTypeSemantic) &&
          is(other.to, $.IntegerTypeSemantic)
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      if (isTypeDeclarationSemantic(other)) {
        return this.declaration.eq(other) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.RangeTypeSemantic)) {
        return this.from === other.from && this.to === other.to && this.step === other.step;
      }

      return false;
    },

    attributes(): DeclarationManager {
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
