import {
  $AnalyzerType,
  $CommentNode,
  CommentBlockCloseNode,
  CommentBlockContentNode,
  CommentBlockOpenNode,
  CommentNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type CommentBlockNode = CommentNode &
  Brand<'Analyzer.CommentBlockNode'> & {
    open: CommentBlockOpenNode;
    content?: CommentBlockContentNode | Nothing;
    close?: CommentBlockCloseNode | Nothing;
  };

export const $CommentBlockNode = () => $AnalyzerType<CommentBlockNode>('CommentBlockNode', $CommentNode());

export function newCommentBlockNode(
  open: CommentBlockOpenNode,
  content?: CommentBlockContentNode | Nothing,
  close?: CommentBlockCloseNode | Nothing,
): CommentBlockNode {
  return newSyntaxNode({
    $: $CommentBlockNode(),
    open,
    content,
    close,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
