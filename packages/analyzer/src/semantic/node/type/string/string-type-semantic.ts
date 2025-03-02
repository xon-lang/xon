import {
  $AnalyzerType,
  $IdTypeSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  NominalTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing, Text} from '#common';
import {Brand, is} from '#typing';

export type StringTypeSemantic = TypeSemantic &
  Brand<'Analyzer.StringTypeSemantic'> & {
    value: Text;
    declaration?: NominalTypeDeclarationSemantic | Nothing;
  };

export const $StringTypeSemantic = () =>
  $AnalyzerType<StringTypeSemantic>('StringTypeSemantic', $TypeSemantic());

export function newStringTypeSemantic(
  value: Text,
  declaration?: NominalTypeDeclarationSemantic | Nothing,
): StringTypeSemantic {
  return {
    $: $StringTypeSemantic(),
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
      if (is(other, $StringTypeSemantic())) {
        return this.value === other.value;
      }

      return false;
    },
  };
}
