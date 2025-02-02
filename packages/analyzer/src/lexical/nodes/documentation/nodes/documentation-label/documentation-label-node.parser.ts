import {
  AnalyzerContext,
  DocumentationLabelNode,
  newDocumentationLabelNode,
  parseDocumentationDescriptionNode,
  parseDocumentationLabelOperatorNode,
  parseIdKeywordOperatorNode,
} from '#analyzer';
import {Nothing, nothing} from '#common';

export function parseDocumentationLabelNode(context: AnalyzerContext): DocumentationLabelNode | Nothing {
  const operatorNode = parseDocumentationLabelOperatorNode(context);

  if (!operatorNode) {
    return nothing;
  }

  const idNode = parseIdKeywordOperatorNode(context);
  const descriptionNode = parseDocumentationDescriptionNode(context);

  return newDocumentationLabelNode(operatorNode, idNode, descriptionNode);
}
