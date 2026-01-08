import {
  $AnalyzerType,
  $CommentNode,
  CommentBlockCloseNode,
  CommentBlockContentNode,
  CommentBlockOpenNode,
  CommentNode,
  newSyntaxNode,
  nodesRange,
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
    isHidden: true,
    range: nodesRange(open, content, close),

    open,
    content,
    close,
  });
}
