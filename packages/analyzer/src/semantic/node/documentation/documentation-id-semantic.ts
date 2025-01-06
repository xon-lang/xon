import {
  $Semantic,
  analyzerPackageType,
  DeclarationSemantic,
  Node,
  Semantic,
  SemanticAnalyzer,
} from '#analyzer';

export type DocumentationIdSemantic = Semantic & {
  declaration: DeclarationSemantic;
};

export const $DocumentationIdSemantic = analyzerPackageType<DocumentationIdSemantic>(
  'DocumentationIdSemantic',
  $Semantic,
);

export function documentationIdSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  declaration: DeclarationSemantic,
): DocumentationIdSemantic {
  return {
    $: $DocumentationIdSemantic,
    nodeLink,
    declaration,
  };
}
