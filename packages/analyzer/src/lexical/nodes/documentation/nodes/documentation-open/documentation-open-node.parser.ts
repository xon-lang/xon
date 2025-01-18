import {$DocumentationOpenNode, AnalyzerContext, DOCUMENTATION_OPEN, DocumentationOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseDocumentationOpenNode(context: AnalyzerContext): DocumentationOpenNode | Nothing {
  return context.source.takeWhile(
    $DocumentationOpenNode,
    (x, i) => DOCUMENTATION_OPEN.at2(i).equals(x),
    DOCUMENTATION_OPEN.count(),
  );
}
