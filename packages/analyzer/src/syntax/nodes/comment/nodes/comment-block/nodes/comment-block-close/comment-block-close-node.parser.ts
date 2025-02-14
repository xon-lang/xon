import {$CommentBlockCloseNode, AnalyzerContext, COMMENT_BLOCK_CLOSE, CommentBlockCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCommentBlockCloseNode(context: AnalyzerContext): CommentBlockCloseNode | Nothing {
  return context.source.takeWhile(
    $CommentBlockCloseNode,
    (x, i) => COMMENT_BLOCK_CLOSE.at2(i).equals(x),
    COMMENT_BLOCK_CLOSE.count(),
  );
}
