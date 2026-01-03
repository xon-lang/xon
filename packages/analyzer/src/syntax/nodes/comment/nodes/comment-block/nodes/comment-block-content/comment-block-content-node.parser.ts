import {
  $CommentBlockContentNode,
  AnalyzerContext,
  COMMENT_BLOCK_CLOSE,
  CommentBlockContentNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseCommentBlockContentNode(context: AnalyzerContext): CommentBlockContentNode | Nothing {
  return context.source.takeWhile(
    $CommentBlockContentNode(),
    (_, i, z) => !z.startsWith(COMMENT_BLOCK_CLOSE, i),
  );
}
