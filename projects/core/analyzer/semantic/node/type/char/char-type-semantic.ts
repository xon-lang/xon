import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Char, Nothing} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationManager, createDeclarationManager} from '../../../declaration-manager';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface CharTypeSemantic extends TypeSemantic {
  $: $.CharTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Char;
}

export function charTypeSemantic(
  reference: TextResourceRange,
  declaration: NominalTypeDeclarationSemantic | Nothing,
  value: Char,
): CharTypeSemantic {
  return {
    $: $.CharTypeSemantic,
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
      if (is(other, $.CharTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationManager {
      return this.declaration?.attributes?.clone() ?? createDeclarationManager();
    },
  };
}
