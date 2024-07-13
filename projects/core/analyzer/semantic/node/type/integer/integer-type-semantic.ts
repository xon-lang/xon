import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Integer} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
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

      if (is(other, $.IdTypeSemantic)) {
        return this.declaration.eq(other.declaration) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.IntegerTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationManager {
      return this.declaration.attributes?.clone() ?? createDeclarationManager();
    },
  };

  return semantic;
}
