import {$CommentBlockCloseNode, COMMENT_BLOCK_CLOSE, CommentBlockCloseNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentBlockCloseNode(source: CharStream): CommentBlockCloseNode | Nothing {
  return source.takeWhile(
    $CommentBlockCloseNode,
    (x, i) => COMMENT_BLOCK_CLOSE.at2(i).equals(x),
    COMMENT_BLOCK_CLOSE.count(),
  );
}
