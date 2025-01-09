import {$CommentLineOperatorNode, COMMENT_LINE, CommentLineOperatorNode} from '#analyzer';
import {CharStream, Nothing, nothing, textRange} from '#common';

export function parseCommentLineOperatorNode(source: CharStream): CommentLineOperatorNode | Nothing {
  const startPosition = source.position;
  const text = source.takeWhile((x, i) => COMMENT_LINE.at2(i).equals(x), COMMENT_LINE.count());

  if (!text) {
    return nothing;
  }

  const range = textRange(startPosition, source.position);

  return {$: $CommentLineOperatorNode, text, range};
}
