import {
  DocumentationNode,
  newDocumentationNode,
  parseDocumentationCloseNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelNode,
  parseDocumentationOpenNode,
  parsersToNodes,
} from '#analyzer';
import {CharStream, newArrayData, nothing, Nothing} from '#common';

export function parseDocumentationNode(source: CharStream): DocumentationNode | Nothing {
  const openNode = parseDocumentationOpenNode(source);

  if (!openNode) {
    return nothing;
  }

  const descriptionNode = parseDocumentationDescriptionNode(source);
  const labels = parsersToNodes(source, newArrayData([parseDocumentationLabelNode]));
  const closeNodeNode = parseDocumentationCloseNode(source);

  return newDocumentationNode(openNode, labels, descriptionNode, closeNodeNode);
}
