import {
  $AnalyzerType,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeDeclarationSemantic,
  isInSet,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing, Text} from '#common';
import {is} from '#typing';

export type IdTypeSemantic = TypeSemantic & {
  name: Text;
};

export const $IdTypeSemantic = () => $AnalyzerType<IdTypeSemantic>('IdTypeSemantic', $TypeSemantic());

export function newIdTypeSemantic(
  name: Text,
  declaration: TypeDeclarationSemantic | Nothing,
): IdTypeSemantic {
  // if (declaration) {
  //   declaration.usages.addLastItem(nodeLink.reference);
  // }

  return {
    $: $IdTypeSemantic(),
    name,
    declaration,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (is(this.declaration, $NominalTypeDeclarationSemantic())) {
        return this.declaration.extendsType?.is(other) ?? false;
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (
        is(this.declaration, $NominalTypeDeclarationSemantic()) &&
        is(other, $IdTypeSemantic()) &&
        is(other.declaration, $NominalTypeDeclarationSemantic())
      ) {
        return this.declaration.equals(other.declaration);
      }

      return false;
    },

    getAttribute(name: Text): AttributeDeclarationSemantic | Nothing {
      return;
    },
  };
}
