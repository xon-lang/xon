import {
  AnalyzerContext,
  DocumentationNode,
  newDocumentationNode,
  parseDocumentationCloseNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelNode,
  parseDocumentationOpenNode,
  parsersToNodes,
} from '#analyzer';
import {newArrayData, nothing, Nothing} from '#common';

export function parseDocumentationNode(context: AnalyzerContext): DocumentationNode | Nothing {
  const openNode = parseDocumentationOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const descriptionNode = parseDocumentationDescriptionNode(context);
  const labels = parsersToNodes(context, newArrayData([parseDocumentationLabelNode]));
  const closeNodeNode = parseDocumentationCloseNode(context);

  return newDocumentationNode(openNode, labels, descriptionNode, closeNodeNode);
}
