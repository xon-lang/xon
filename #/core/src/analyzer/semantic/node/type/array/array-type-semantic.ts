import {Boolean2, Nothing} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
  isInSet,
} from '#core';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type ArrayTypeSemantic = TypeSemantic & {
  $: $.ArrayTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  items: TypeSemantic[];
};

export function arrayTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  items: TypeSemantic[],
): ArrayTypeSemantic {
  return {
    $: $.ArrayTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.arrayTypeName,
    ),
    items,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $.TypeDeclarationSemantic)) {
        return this.declaration?.eq(other) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.ArrayTypeSemantic)) {
        return this.items === other.items;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };
}
