import {$CommentBlockContentNode, COMMENT_BLOCK_CLOSE, CommentBlockContentNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentBlockContentNode(source: CharStream): CommentBlockContentNode | Nothing {
  return source.takeWhile($CommentBlockContentNode, (_x, i, z) => !z.startsWith(COMMENT_BLOCK_CLOSE, i));
}
