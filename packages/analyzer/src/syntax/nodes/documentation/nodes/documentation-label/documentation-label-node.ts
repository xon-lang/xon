import {
  $AnalyzerType,
  $SyntaxNode,
  DocumentationDescriptionNode,
  DocumentationLabelOperatorNode,
  IdNode,
  IdToken,
  KeywordNode,
  newSyntaxNode,
  nodesRange,
  OperatorNode,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type DocumentationLabelNode = SyntaxNode &
  Brand<'Analyzer.DocumentationLabelNode'> & {
    operator: DocumentationLabelOperatorNode;
    id?: IdToken | KeywordNode | OperatorNode | Nothing;
    description?: DocumentationDescriptionNode | Nothing;
  };

export const $DocumentationLabelNode = () =>
  $AnalyzerType<DocumentationLabelNode>('DocumentationLabelNode', $SyntaxNode());

export function newDocumentationLabelNode(
  operator: DocumentationLabelOperatorNode,
  id?: IdToken | KeywordNode | OperatorNode | Nothing,
  description?: DocumentationDescriptionNode | Nothing,
): DocumentationLabelNode {
  return newSyntaxNode({
    $: $DocumentationLabelNode(),
    isHidden: true,
    range: nodesRange(operator, id, description),

    operator,
    id,
    description,
  });
}
