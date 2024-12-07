import {Boolean2, Nothing, String2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantics,
  createDeclarationScope,
  isInSet,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type StringTypeSemantic = TypeSemantics & {
  $: $.StringTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: String2;
};

export function stringTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  value: String2,
): StringTypeSemantic {
  return {
    $: $.StringTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.stringTypeName,
    ),
    value,

    is(other: TypeSemantics): Boolean2 {
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

    eq(other: TypeSemantics): Boolean2 {
      if (is(other, $.StringTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? createDeclarationScope(analyzer);
    },
  };
}
