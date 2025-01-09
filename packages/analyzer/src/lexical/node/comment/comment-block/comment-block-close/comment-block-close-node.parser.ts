import {$CommentBlockCloseNode, COMMENT_BLOCK_CLOSE, CommentBlockCloseNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseCommentBlockCloseNode(source: CharStream): CommentBlockCloseNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => COMMENT_BLOCK_CLOSE.at2(i).equals(x), COMMENT_BLOCK_CLOSE.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CommentBlockCloseNode, text, range};
}
