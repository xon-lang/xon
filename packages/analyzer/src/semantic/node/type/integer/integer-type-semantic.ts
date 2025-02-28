import {
  $AnalyzerType,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Integer, Nothing} from '#common';
import {is} from '#typing';

export type IntegerTypeSemantic = TypeSemantic & {
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Integer;
};

export const $IntegerTypeSemantic = () =>
  $AnalyzerType<IntegerTypeSemantic>('IntegerTypeSemantic', $TypeSemantic());

export function integerTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  value: Integer,
): IntegerTypeSemantic {
  return {
    $: $IntegerTypeSemantic(),
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $NominalTypeDeclarationSemantic(),
      analyzer.config.literalTypeNames.integerTypeName,
    ),
    value,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is(other, $IdTypeSemantic()) && other.declaration) {
        return this.declaration?.equals(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      if (is(other, $IntegerTypeSemantic())) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope();
    },
  };
}
