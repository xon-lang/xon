import {
  $SyntaxNode,
  analyzerPackageType,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationLabelNode,
  DocumentationOpenNode,
  newSyntaxNode,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type DocumentationNode = SyntaxNode2 &
  Brand<'Analyzer.DocumentationNode'> & {
    openNode: DocumentationOpenNode;
    descriptionNode?: DocumentationDescriptionNode | Nothing;
    labels: ArrayData<DocumentationLabelNode>;
    closeNode?: DocumentationCloseNode | Nothing;
  };

export const $DocumentationNode = analyzerPackageType<DocumentationNode>('DocumentationNode', $SyntaxNode);

export function newDocumentationNode(
  openNode: DocumentationOpenNode,
  labels: ArrayData<DocumentationLabelNode>,
  descriptionNode?: DocumentationDescriptionNode | Nothing,
  closeNode?: DocumentationCloseNode | Nothing,
): DocumentationNode {
  return newSyntaxNode({
    $: $DocumentationNode,
    isHidden: true,
    openNode,
    descriptionNode,
    labels,
    closeNode,
  });
}
