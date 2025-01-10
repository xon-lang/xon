import {
  $SyntaxNode2,
  analyzerPackageType,
  DocumentationDescriptionNode,
  DocumentationLabelOperatorNode,
  IdNode,
  newSyntaxNode,
  SyntaxNode2,
} from '#analyzer';
import {Nothing} from '#common';
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
  return newSyntaxNode({$: $DocumentationLabelNode, operatorNode, idNode, descriptionNode});
}
