import {
  $AnalyzerType,
  $SyntaxNode,
  DocumentationDescriptionNode,
  DocumentationLabelOperatorNode,
  FormatterContext,
  HighlightContext,
  IdNode,
  KeywordNode,
  newSyntaxNode,
  OperatorNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type DocumentationLabelNode = SyntaxNode &
  Brand<'Analyzer.DocumentationLabelNode'> & {
    operatorNode: DocumentationLabelOperatorNode;
    idNode?: IdNode | KeywordNode | OperatorNode | Nothing;
    descriptionNode?: DocumentationDescriptionNode | Nothing;
  };

export const $DocumentationLabelNode = () =>
  $AnalyzerType<DocumentationLabelNode>('DocumentationLabelNode', $SyntaxNode());

export function newDocumentationLabelNode(
  operatorNode: DocumentationLabelOperatorNode,
  idNode?: IdNode | KeywordNode | OperatorNode | Nothing,
  descriptionNode?: DocumentationDescriptionNode | Nothing,
): DocumentationLabelNode {
  return newSyntaxNode({
    $: $DocumentationLabelNode(),
    operatorNode,
    idNode,
    descriptionNode,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
