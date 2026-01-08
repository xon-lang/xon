import {
  $AnalyzerType,
  $SyntaxNode,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationLabelNode,
  DocumentationOpenNode,
  newSyntaxNode,
  nodesRange,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Brand, Nothing} from '#core';

export type DocumentationNode = SyntaxNode &
  Brand<'Analyzer.DocumentationNode'> & {
    openNode: DocumentationOpenNode;
    descriptionNode?: DocumentationDescriptionNode | Nothing;
    labels: ArrayData<DocumentationLabelNode>;
    closeNode?: DocumentationCloseNode | Nothing;
  };

export const $DocumentationNode = () => $AnalyzerType<DocumentationNode>('DocumentationNode', $SyntaxNode());

export function newDocumentationNode(
  openNode: DocumentationOpenNode,
  labels: ArrayData<DocumentationLabelNode>,
  descriptionNode?: DocumentationDescriptionNode | Nothing,
  closeNode?: DocumentationCloseNode | Nothing,
): DocumentationNode {
  return newSyntaxNode({
    $: $DocumentationNode(),
    isHidden: true,
    range: nodesRange(openNode, ...labels, descriptionNode, closeNode),

    openNode,
    descriptionNode,
    labels,
    closeNode,
  });
}
