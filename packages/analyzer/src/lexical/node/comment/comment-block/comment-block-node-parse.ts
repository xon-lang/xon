import {
  CommentBlockNode,
  newCommentBlockNode,
  parseCommentBlockCloseNode,
  parseCommentBlockContentNode,
  parseCommentBlockOpenNode,
} from '#analyzer';
import {CharStream, nothing, Nothing} from '#common';

export function parseCommentBlockNode(source: CharStream): CommentBlockNode | Nothing {
  const openNode = parseCommentBlockOpenNode(source);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseCommentBlockContentNode(source);
  const closeNode = parseCommentBlockCloseNode(source);

  return newCommentBlockNode(openNode, contentNode, closeNode);
}
