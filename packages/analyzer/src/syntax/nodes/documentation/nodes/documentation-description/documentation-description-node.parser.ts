import {
  $DocumentationDescriptionNode,
  AnalyzerContext,
  AT,
  DOCUMENTATION_CLOSE,
  DocumentationDescriptionNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseDocumentationDescriptionNode(
  context: AnalyzerContext,
): DocumentationDescriptionNode | Nothing {
  return context.source.takeWhile(
    $DocumentationDescriptionNode,
    (_x, i, z) => !z.startsWith(AT, i) && !z.startsWith(DOCUMENTATION_CLOSE, i),
  );
}
