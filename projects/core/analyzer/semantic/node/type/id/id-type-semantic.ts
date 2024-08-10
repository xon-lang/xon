import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export type IdTypeSemantic = TypeSemantic & {
  $: $.IdTypeSemantic;
  name: String2;
  declaration?: TypeDeclarationSemantic | Nothing;
};

export function idTypeSemantic(
  reference: TextResourceRange,
  name: String2,
  declaration?: TypeDeclarationSemantic | Nothing,
): IdTypeSemantic {
  declaration?.usages.push(reference);

  return {
    $: $.IdTypeSemantic,
    reference,
    name,
    declaration,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.baseType?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (
        is(this.declaration, $.NominalTypeDeclarationSemantic) &&
        is(other, $.IdTypeSemantic) &&
        is(other.declaration, $.NominalTypeDeclarationSemantic)
      ) {
        return this.declaration.eq(other.declaration);
      }

      return false;
    },

    attributes(): DeclarationManager<ValueDeclarationSemantic> {
      return this.declaration?.type.attributes().clone() ?? createDeclarationManager();
    },
  };
}
