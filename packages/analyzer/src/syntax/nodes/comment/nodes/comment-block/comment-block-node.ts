import {
  $AnalyzerType,
  $CommentNode,
  CommentBlockCloseNode,
  CommentBlockContentNode,
  CommentBlockOpenNode,
  CommentNode,
  DiagnosticContext,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CommentBlockNode = CommentNode &
  Brand<'Analyzer.CommentBlockNode'> & {
    openNode: CommentBlockOpenNode;
    contentNode?: CommentBlockContentNode | Nothing;
    closeNode?: CommentBlockCloseNode | Nothing;
  };

export const $CommentBlockNode = () => $AnalyzerType<CommentBlockNode>('CommentBlockNode', $CommentNode());

export function newCommentBlockNode(
  openNode: CommentBlockOpenNode,
  contentNode?: CommentBlockContentNode | Nothing,
  closeNode?: CommentBlockCloseNode | Nothing,
): CommentBlockNode {
  return newSyntaxNode({
    $: $CommentBlockNode(),
    openNode,
    contentNode,
    closeNode,

    semantify(context: SemanticContext): void {},
    diagnose(context: DiagnosticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
