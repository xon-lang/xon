import {$CommentLineContentNode, CommentLineContentNode, NL} from '#analyzer';
import {CharStream, nothing, Nothing, textRange} from '#common';

export function parseCommentLineContentNode(source: CharStream): CommentLineContentNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((_x, i, z) => !z.startsWith(NL, i));

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CommentLineContentNode, text, range};
}
