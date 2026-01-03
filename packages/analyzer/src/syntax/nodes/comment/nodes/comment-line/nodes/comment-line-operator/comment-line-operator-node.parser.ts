import {
  $CommentLineOperatorNode,
  AnalyzerContext,
  COMMENT_LINE_START,
  CommentLineOperatorNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseCommentLineOperatorNode(context: AnalyzerContext): CommentLineOperatorNode | Nothing {
  return context.source.takeText($CommentLineOperatorNode(), COMMENT_LINE_START);
}
