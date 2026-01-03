import {
  AnalyzerContext,
  CommentBlockNode,
  newCommentBlockNode,
  parseCommentBlockCloseNode,
  parseCommentBlockContentNode,
  parseCommentBlockOpenNode,
} from '#analyzer';
import {nothing, Nothing} from '#core';

export function parseCommentBlockNode(context: AnalyzerContext): CommentBlockNode | Nothing {
  const open = parseCommentBlockOpenNode(context);

  if (!open) {
    return nothing;
  }

  const content = parseCommentBlockContentNode(context);
  const close = parseCommentBlockCloseNode(context);

  return newCommentBlockNode(open, content, close);
}
