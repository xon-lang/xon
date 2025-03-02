import {
  $AnalyzerType,
  $IdTypeSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  NominalTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Character, Nothing} from '#common';
import {Brand, is} from '#typing';

export type CharacterTypeSemantic = TypeSemantic &
  Brand<'Analyzer.CharacterTypeSemantic'> & {
    value: Character;
    declaration?: NominalTypeDeclarationSemantic | Nothing;
  };

export const $CharacterTypeSemantic = () =>
  $AnalyzerType<CharacterTypeSemantic>('CharacterTypeSemantic', $TypeSemantic());

export function newCharacterTypeSemantic(
  value: Character,
  declaration?: NominalTypeDeclarationSemantic | Nothing,
): CharacterTypeSemantic {
  return {
    $: $CharacterTypeSemantic(),
    declaration,
    value,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is(other, $IdTypeSemantic()) && other.declaration) {
        // return this.declaration.equals(other.declaration) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      if (is(other, $CharacterTypeSemantic())) {
        return this.value === other.value;
      }

      return false;
    },
  };
}
