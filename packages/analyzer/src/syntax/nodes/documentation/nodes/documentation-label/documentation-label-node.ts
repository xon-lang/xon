import {
  $SyntaxNode,
  analyzerPackageType,
  DocumentationDescriptionNode,
  DocumentationLabelOperatorNode,
  IdNode,
  newSyntaxNode,
  SyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type DocumentationLabelNode = SyntaxNode &
  Brand<'Analyzer.DocumentationLabelNode'> & {
    operatorNode: DocumentationLabelOperatorNode;
    idNode?: IdNode | Nothing;
    descriptionNode?: DocumentationDescriptionNode | Nothing;
  };

export const $DocumentationLabelNode = analyzerPackageType<DocumentationLabelNode>(
  'DocumentationLabelNode',
  $SyntaxNode,
);

export function newDocumentationLabelNode(
  operatorNode: DocumentationLabelOperatorNode,
  idNode?: IdNode | Nothing,
  descriptionNode?: DocumentationDescriptionNode | Nothing,
): DocumentationLabelNode {
  return newSyntaxNode({$: $DocumentationLabelNode, operatorNode, idNode, descriptionNode});
}
