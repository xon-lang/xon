import {$CommentBlockOpenNode, AnalyzerContext, COMMENT_BLOCK_OPEN, CommentBlockOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCommentBlockOpenNode(context: AnalyzerContext): CommentBlockOpenNode | Nothing {
  return context.source.takeText($CommentBlockOpenNode(), COMMENT_BLOCK_OPEN);
}
