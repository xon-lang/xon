import {DeclarationSemantics, Node, SemanticAnalyzer, Semantics} from '#semantics';
import {$} from '#typing';

export type DocumentationIdSemantic = Semantics & {
  $: $.DocumentationIdSemantic;
  declaration: DeclarationSemantics;
};

export function documentationIdSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  declaration: DeclarationSemantics,
): DocumentationIdSemantic {
  return {
    $: $.DocumentationIdSemantic,
    nodeLink,
    declaration,
  };
}
