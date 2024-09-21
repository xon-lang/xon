import {Boolean2, Integer, Nothing} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
  createDeclarationScope,
  isInSet,
} from '#core';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export interface IntegerTypeSemantic extends TypeSemantic {
  $: $.IntegerTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Integer;
}

export function integerTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  value: Integer,
): IntegerTypeSemantic {
  return {
    $: $.IntegerTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.integerTypeName,
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
      if (is(other, $.IntegerTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? createDeclarationScope(analyzer);
    },
  };
}
