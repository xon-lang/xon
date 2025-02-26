import {
  $AnalyzerType,
  $IdTypeSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  NominalTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing, Text} from '#common';
import {is} from '#typing';

export type StringTypeSemantic = TypeSemantic & {
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Text;
};

export const $StringTypeSemantic = () =>
  $AnalyzerType<StringTypeSemantic>('StringTypeSemantic', $TypeSemantic());

export function newStringTypeSemantic(
  declaration: NominalTypeDeclarationSemantic | Nothing,
  value: Text,
): StringTypeSemantic {
  return {
    $: $StringTypeSemantic(),
    declaration,
    value,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $IdTypeSemantic()) && other.declaration) {
        return this.declaration?.equals(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $StringTypeSemantic())) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope();
    },
  };
}
