import {
  $DocumentationLabelOperatorNode,
  AnalyzerContext,
  AT,
  DocumentationLabelOperatorNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseDocumentationLabelOperatorNode(
  context: AnalyzerContext,
): DocumentationLabelOperatorNode | Nothing {
  return context.source.takeWhile($DocumentationLabelOperatorNode, (x, i) => AT.at2(i).equals(x), AT.count());
}
