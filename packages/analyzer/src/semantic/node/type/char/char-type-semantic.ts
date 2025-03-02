import {
  $AnalyzerType,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeDeclarationSemantic,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Char, Nothing} from '#common';
import {is} from '#typing';

export type CharTypeSemantic = TypeSemantic & {
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Char;
};

export const $CharTypeSemantic = () => $AnalyzerType<CharTypeSemantic>('CharTypeSemantic', $TypeSemantic());

export function charTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node, value: Char): CharTypeSemantic {
  return {
    $: $CharTypeSemantic(),
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $NominalTypeDeclarationSemantic(),
      analyzer.config.literalTypeNames.charTypeName,
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
      if (is(other, $CharTypeSemantic())) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope();
    },
  };
}
