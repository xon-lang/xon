import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationManager, createDeclarationManager} from '../../../declaration-manager';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface StringTypeSemantic extends TypeSemantic {
  $: $.StringTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: String2;
}

export function stringTypeSemantic(
  reference: TextResourceRange,
  declaration: NominalTypeDeclarationSemantic | Nothing,
  value: String2,
): StringTypeSemantic {
  return {
    $: $.StringTypeSemantic,
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

      if (is(other, $.IdTypeSemantic) && other.declaration) {
        return this.declaration?.eq(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.StringTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationManager {
      return this.declaration?.attributes?.clone() ?? createDeclarationManager();
    },
  };
}
