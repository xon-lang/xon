import {Boolean2, Nothing} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantics,
  isInSet,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type ArrayTypeSemantic = TypeSemantics & {
  $: $.ArrayTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  items: TypeSemantics[];
};

export function arrayTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  items: TypeSemantics[],
): ArrayTypeSemantic {
  return {
    $: $.ArrayTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.arrayTypeName,
    ),
    items,

    is(other: TypeSemantics): Boolean2 {
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

    eq(other: TypeSemantics): Boolean2 {
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
