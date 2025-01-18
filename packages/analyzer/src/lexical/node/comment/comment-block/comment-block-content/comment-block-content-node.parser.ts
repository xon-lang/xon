import {
  $CommentBlockContentNode,
  AnalyzerContext,
  COMMENT_BLOCK_CLOSE,
  CommentBlockContentNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseCommentBlockContentNode(context: AnalyzerContext): CommentBlockContentNode | Nothing {
  return context.source.takeWhile(
    $CommentBlockContentNode,
    (_x, i, z) => !z.startsWith(COMMENT_BLOCK_CLOSE, i),
  );
}
