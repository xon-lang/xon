import {
  $AnalyzerType,
  $IdTypeSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  isInSet,
  NominalTypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Text} from '#common';
import {is} from '#typing';

export type StringTypeSemantic = TypeSemantic & {
  declaration: NominalTypeDeclarationSemantic;
  value: Text;
};

export const $StringTypeSemantic = () =>
  $AnalyzerType<StringTypeSemantic>('StringTypeSemantic', $TypeSemantic());

export function newStringTypeSemantic(
  declaration: NominalTypeDeclarationSemantic,
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

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return {} as DeclarationScope<AttributeValueDeclarationSemantic>;
    },
  };
}
