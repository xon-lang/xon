import {
  $AnalyzerType,
  $SyntaxNode,
  DiagnosticContext,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationLabelNode,
  DocumentationOpenNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
  SyntaxNode,
} from '#analyzer';
import {ArrayData, Nothing} from '#common';
import {Brand} from '#typing';

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
    openNode,
    descriptionNode,
    labels,
    closeNode,

    semantify(context: SemanticContext): void{},
    diagnose(context: DiagnosticContext): void{},
    format(context: FormatterContext): void{},
    highlight(context: HighlightContext): void{},
  });
}
