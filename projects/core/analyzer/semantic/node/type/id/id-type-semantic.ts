import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Array2, Boolean2, Nothing} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface IdTypeSemantic extends TypeSemantic {
  $: $.IdTypeSemantic;
  declaration: TypeDeclarationSemantic;
  generics: Array2<TypeSemantic | Nothing> | Nothing;
}

export function idTypeSemantic(
  analyzer: SemanticAnalyzer,
  reference: TextResourceRange,
  declaration: TypeDeclarationSemantic,
  generics: Array2<TypeSemantic | Nothing> | Nothing,
): IdTypeSemantic {
  declaration.usages.push(reference);

  return {
    $: $.IdTypeSemantic,
    reference,
    declaration,
    generics,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.type?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(this.declaration, $.NominalTypeDeclarationSemantic) && is(other, $.IdTypeSemantic)) {
        return this.declaration.eq(other.declaration);
      }

      return false;
    },

    attributes(): DeclarationManager {
      // todo review below two checks
      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.attributes?.clone() ?? createDeclarationManager();
      }

      if (is(this.declaration, $.StructuralTypeDeclarationSemantic)) {
        return this.declaration.value?.attributes().clone() ?? createDeclarationManager();
      }

      return createDeclarationManager();
    },
  };
}
