import {Boolean2, Char, Nothing} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
  createDeclarationScope,
  isInSet,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type CharTypeSemantic = TypeSemantic & {
  $: $.CharTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Char;
};

export function charTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node, value: Char): CharTypeSemantic {
  return {
    $: $.CharTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.charTypeName,
    ),
    value,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $.IdTypeSemantic) && other.declaration) {
        return this.declaration?.eq(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.CharTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? createDeclarationScope(analyzer);
    },
  };
}
