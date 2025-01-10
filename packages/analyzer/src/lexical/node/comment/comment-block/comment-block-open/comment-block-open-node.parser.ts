import {$CommentBlockOpenNode, COMMENT_BLOCK_OPEN, CommentBlockOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentBlockOpenNode(source: CharStream): CommentBlockOpenNode | Nothing {
  return source.takeWhile(
    $CommentBlockOpenNode,
    (x, i) => COMMENT_BLOCK_OPEN.at2(i).equals(x),
    COMMENT_BLOCK_OPEN.count(),
  );
}
