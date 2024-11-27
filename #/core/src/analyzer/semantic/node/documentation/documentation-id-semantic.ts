import {DeclarationSemantic, Node, Semantic, SemanticAnalyzer} from '#core';
import {$} from '#typing';

export type DocumentationIdSemantic = Semantic & {
  $: $.DocumentationIdSemantic;
  declaration: DeclarationSemantic;
};

export function documentationIdSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  declaration: DeclarationSemantic,
): DocumentationIdSemantic {
  return {
    $: $.DocumentationIdSemantic,
    nodeLink,
    declaration,
  };
}
