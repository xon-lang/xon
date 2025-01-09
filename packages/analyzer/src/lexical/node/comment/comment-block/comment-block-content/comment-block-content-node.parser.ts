import {$CommentBlockContentNode, COMMENT_BLOCK_CLOSE, CommentBlockContentNode, NL} from '#analyzer';
import {CharStream, nothing, Nothing, textRange} from '#common';

export function parseCommentBlockContentNode(source: CharStream): CommentBlockContentNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((_x, i, z) => !z.startsWith(COMMENT_BLOCK_CLOSE, i));

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CommentBlockContentNode, text, range};
}
