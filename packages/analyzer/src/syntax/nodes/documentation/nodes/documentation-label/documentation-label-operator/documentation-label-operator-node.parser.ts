import {
  $DocumentationLabelOperatorNode,
  AnalyzerContext,
  AT,
  DocumentationLabelOperatorNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseDocumentationLabelOperatorNode(
  context: AnalyzerContext,
): DocumentationLabelOperatorNode | Nothing {
  return context.source.takeText($DocumentationLabelOperatorNode(), AT);
}
