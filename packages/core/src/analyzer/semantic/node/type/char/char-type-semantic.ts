import {Boolean2, Char, Nothing} from '#common';
import {
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
  corePackageType,
  isInSet,
  newDeclarationScope,
} from '#core';
import {is} from '#typing';

export type CharTypeSemantic = TypeSemantic & {
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Char;
};

export const $CharTypeSemantic = corePackageType<CharTypeSemantic>('CharTypeSemantic', $TypeSemantic);

export function charTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node, value: Char): CharTypeSemantic {
  return {
    $: $CharTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.charTypeName,
    ),
    value,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $IdTypeSemantic) && other.declaration) {
        return this.declaration?.eq(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $CharTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope();
    },
  };
}
