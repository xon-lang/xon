import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Integer} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface IntegerTypeSemantic extends TypeSemantic {
  $: $.IntegerTypeSemantic;
  declaration: NominalTypeDeclarationSemantic;
  value: Integer;
}

export function integerTypeSemantic(
  reference: TextResourceRange,
  declaration: NominalTypeDeclarationSemantic,
  value: Integer,
): IntegerTypeSemantic {
  return {
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
}
