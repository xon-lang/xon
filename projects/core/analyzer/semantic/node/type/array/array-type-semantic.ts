import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Array2, Boolean2, Nothing} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../declaration-manager';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface ArrayTypeSemantic extends TypeSemantic {
  $: $.ArrayTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  items: Array2<TypeSemantic>;
}

export function arrayTypeSemantic(
  reference: TextResourceRange,
  declaration: NominalTypeDeclarationSemantic | Nothing,
  items: Array2<TypeSemantic>,
): ArrayTypeSemantic {
  return {
    $: $.ArrayTypeSemantic,
    reference,
    declaration,
    items,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $.TypeDeclarationSemantic)) {
        return this.declaration?.eq(other) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.ArrayTypeSemantic)) {
        return this.items === other.items;
      }

      return false;
    },

    attributes(): DeclarationManager<ValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };
}
