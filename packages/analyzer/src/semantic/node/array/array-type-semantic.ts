import {
  $AnalyzerType,
  $NominalTypeDeclarationSemantic,
  $TypeSemantic,
  Node,
  NominalTypeDeclarationSemantic,
  Semantic,
  SemanticAnalyzer,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';

export type ArrayTypeSemantic = Semantic & {
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  items: ArrayData<Semantic>;
};

export const $ArrayTypeSemantic = () =>
  $AnalyzerType<ArrayTypeSemantic>('ArrayTypeSemantic', $TypeSemantic());

export function arrayTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  items: ArrayData<Semantic>,
): ArrayTypeSemantic {
  return {
    $: $ArrayTypeSemantic(),
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $NominalTypeDeclarationSemantic(),
      analyzer.config.literalTypeNames.arrayTypeName,
    ),
    items,

    // is(other: Semantic): Boolean2 {
    //   if (is(other, $SetTypeSemantic())) {
    //     return isInSet(this, other);
    //   }

    //   if (this.equals(other)) {
    //     return true;
    //   }

    //   if (is(other, $TypeDeclarationSemantic())) {
    //     return this.declaration?.equals(other) || (this.declaration?.type?.is(other) ?? false);
    //   }

    //   return false;
    // },

    // equals(other: Semantic): Boolean2 {
    //   if (is(other, $ArrayTypeSemantic())) {
    //     return this.items === other.items;
    //   }

    //   return false;
    // },

    // scope(): SemanticScope {
    //   throw new Error('Not implemented');
    // },
  };
}
