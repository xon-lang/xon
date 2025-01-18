import {
  AnalyzerContext,
  CommentBlockNode,
  newCommentBlockNode,
  parseCommentBlockCloseNode,
  parseCommentBlockContentNode,
  parseCommentBlockOpenNode,
} from '#analyzer';
import {CharStream, nothing, Nothing} from '#common';

export function parseCommentBlockNode(context: AnalyzerContext): CommentBlockNode | Nothing {
  const openNode = parseCommentBlockOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseCommentBlockContentNode(context);
  const closeNode = parseCommentBlockCloseNode(context);

  return newCommentBlockNode(openNode, contentNode, closeNode);
}
