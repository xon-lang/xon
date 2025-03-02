import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  NominalTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Integer, Nothing} from '#common';
import {Brand, is} from '#typing';

export type IntegerTypeSemantic = TypeSemantic &
  Brand<'Analyzer.IntegerTypeSemantic'> & {
    value: Integer;
    declaration?: NominalTypeDeclarationSemantic | Nothing;
  };

export const $IntegerTypeSemantic = () =>
  $AnalyzerType<IntegerTypeSemantic>('IntegerTypeSemantic', $TypeSemantic());

export function newIntegerTypeSemantic(
  value: Integer,
  declaration?: NominalTypeDeclarationSemantic | Nothing,
): IntegerTypeSemantic {
  return {
    $: $IntegerTypeSemantic(),
    value,
    declaration,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      // if (is(other, $IdTypeSemantic()) && other.declaration) {
      //   return this.declaration?.equals(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      // }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      if (is(other, $IntegerTypeSemantic())) {
        return this.value === other.value;
      }

      return false;
    },
  };
}
