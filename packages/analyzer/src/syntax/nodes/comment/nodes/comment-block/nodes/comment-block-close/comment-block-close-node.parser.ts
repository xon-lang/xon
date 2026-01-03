import {$CommentBlockCloseNode, AnalyzerContext, COMMENT_BLOCK_CLOSE, CommentBlockCloseNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCommentBlockCloseNode(context: AnalyzerContext): CommentBlockCloseNode | Nothing {
  return context.source.takeText($CommentBlockCloseNode(), COMMENT_BLOCK_CLOSE);
}
