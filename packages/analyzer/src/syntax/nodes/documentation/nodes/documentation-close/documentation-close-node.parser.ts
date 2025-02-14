import {
  $DocumentationCloseNode,
  AnalyzerContext,
  DOCUMENTATION_CLOSE,
  DocumentationCloseNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseDocumentationCloseNode(context: AnalyzerContext): DocumentationCloseNode | Nothing {
  return context.source.takeWhile(
    $DocumentationCloseNode,
    (x, i) => DOCUMENTATION_CLOSE.at2(i).equals(x),
    DOCUMENTATION_CLOSE.count(),
  );
}
