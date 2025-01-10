import {$CommentLineContentNode, CommentLineContentNode, NL} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentLineContentNode(source: CharStream): CommentLineContentNode | Nothing {
  return source.takeWhile($CommentLineContentNode, (_x, i, z) => !z.startsWith(NL, i));
}
