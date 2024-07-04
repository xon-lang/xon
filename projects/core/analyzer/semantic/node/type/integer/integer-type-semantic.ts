import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Array2, Boolean2, Integer, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {IdTypeSemantic} from '../id/id-type-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface IntegerTypeSemantic extends TypeSemantic {
  $: $.IntegerTypeSemantic;
  declaration: DeclarationSemantic;
  value: Integer;
}

export function integerTypeSemantic(
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
  value: IntegerTypeSemantic['value'],
): IntegerTypeSemantic {
  const semantic: IntegerTypeSemantic = {
    $: $.IntegerTypeSemantic,
    reference,
    declaration,
    value,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is<IdTypeSemantic>(other, $.IdTypeSemantic)) {
        return this.declaration.eq(other.declaration) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is<IntegerTypeSemantic>(other, $.IntegerTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
