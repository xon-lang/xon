import {
  DocumentationLabelNode,
  newDocumentationLabelNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelOperatorNode,
  parseIdNode,
} from '#analyzer';
import {CharStream, Nothing, nothing} from '#common';

export function parseDocumentationLabelNode(source: CharStream): DocumentationLabelNode | Nothing {
  const operatorNode = parseDocumentationLabelOperatorNode(source);

  if (!operatorNode) {
    return nothing;
  }

  const idNode = parseIdNode(source);
  const descriptionNode = parseDocumentationDescriptionNode(source);

  return newDocumentationLabelNode(operatorNode, idNode, descriptionNode);
}
