import {
  $AnalyzerType,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  NominalTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2} from '#common';
import {is} from '#typing';

export type NominalTypeSemantic = TypeSemantic & {
  declaration: NominalTypeDeclarationSemantic;
};

export const $NominalTypeSemantic = () =>
  $AnalyzerType<NominalTypeSemantic>('NominalTypeSemantic', $TypeSemantic());

export function newNominalTypeSemantic(declaration: NominalTypeDeclarationSemantic): NominalTypeSemantic {
  // if (declaration) {
  //   declaration.usages.addLastItem(nodeLink.reference);
  // }

  return {
    $: $NominalTypeSemantic(),
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
        is(other, $NominalTypeSemantic()) &&
        is(other.declaration, $NominalTypeDeclarationSemantic())
      ) {
        return this.declaration.equals(other.declaration);
      }

      return false;
    },
  };
}
