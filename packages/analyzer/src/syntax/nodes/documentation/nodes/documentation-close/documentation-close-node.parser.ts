import {
  $DocumentationCloseNode,
  AnalyzerContext,
  DOCUMENTATION_CLOSE,
  DocumentationCloseNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseDocumentationCloseNode(context: AnalyzerContext): DocumentationCloseNode | Nothing {
  return context.source.takeText($DocumentationCloseNode(), DOCUMENTATION_CLOSE);
}
