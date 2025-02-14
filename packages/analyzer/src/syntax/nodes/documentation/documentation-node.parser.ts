import {
  AnalyzerContext,
  DocumentationLabelNode,
  DocumentationNode,
  newDocumentationNode,
  parseDocumentationCloseNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelNode,
  parseDocumentationOpenNode,
} from '#analyzer';
import {newArrayData, nothing, Nothing} from '#common';

export function parseDocumentationNode(context: AnalyzerContext): DocumentationNode | Nothing {
  const openNode = parseDocumentationOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const descriptionNode = parseDocumentationDescriptionNode(context);
  const labels = newArrayData<DocumentationLabelNode>();

  while (true) {
    const node = parseDocumentationLabelNode(context);

    if (!node) {
      break;
    }

    labels.addLastItem(node);
  }

  const closeNodeNode = parseDocumentationCloseNode(context);

  return newDocumentationNode(openNode, labels, descriptionNode, closeNodeNode);
}
