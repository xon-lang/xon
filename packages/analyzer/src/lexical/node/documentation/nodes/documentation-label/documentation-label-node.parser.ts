import {
  AnalyzerContext,
  DocumentationLabelNode,
  newDocumentationLabelNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelOperatorNode,
  parseIdNode,
} from '#analyzer';
import {Nothing, nothing} from '#common';

export function parseDocumentationLabelNode(context: AnalyzerContext): DocumentationLabelNode | Nothing {
  const operatorNode = parseDocumentationLabelOperatorNode(context);

  if (!operatorNode) {
    return nothing;
  }

  const idNode = parseIdNode(context);
  const descriptionNode = parseDocumentationDescriptionNode(context);

  return newDocumentationLabelNode(operatorNode, idNode, descriptionNode);
}
