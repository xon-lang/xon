import {
  $SyntaxNode2,
  analyzerPackageType,
  DocumentationDescriptionNode,
  DocumentationLabelOperatorNode,
  IdNode,
  rangeFromNodes2,
  SyntaxNode2,
} from '#analyzer';
import {newArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type DocumentationLabelNode = SyntaxNode2 &
  Brand<'Analyzer.DocumentationLabelNode'> & {
    operatorNode: DocumentationLabelOperatorNode;
    idNode?: IdNode | Nothing;
    descriptionNode?: DocumentationDescriptionNode | Nothing;
  };

export const $DocumentationLabelNode = analyzerPackageType<DocumentationLabelNode>(
  'DocumentationLabelNode',
  $SyntaxNode2,
);

export function newDocumentationLabelNode(
  operatorNode: DocumentationLabelOperatorNode,
  idNode?: IdNode | Nothing,
  descriptionNode?: DocumentationDescriptionNode | Nothing,
): DocumentationLabelNode {
  const children = newArrayData([operatorNode, idNode, descriptionNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $DocumentationLabelNode,
    range,
    operatorNode,
    idNode,
    descriptionNode,
    children,
  };
}
