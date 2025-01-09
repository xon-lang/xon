import {$CommentBlockOpenNode, COMMENT_BLOCK_OPEN, CommentBlockOpenNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseCommentBlockOpenNode(source: CharStream): CommentBlockOpenNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => COMMENT_BLOCK_OPEN.at2(i).equals(x), COMMENT_BLOCK_OPEN.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CommentBlockOpenNode, text, range};
}
