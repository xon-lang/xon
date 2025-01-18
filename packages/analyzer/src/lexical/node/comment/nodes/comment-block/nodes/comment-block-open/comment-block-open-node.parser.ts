import {$CommentBlockOpenNode, AnalyzerContext, COMMENT_BLOCK_OPEN, CommentBlockOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCommentBlockOpenNode(context: AnalyzerContext): CommentBlockOpenNode | Nothing {
  return context.source.takeWhile(
    $CommentBlockOpenNode,
    (x, i) => COMMENT_BLOCK_OPEN.at2(i).equals(x),
    COMMENT_BLOCK_OPEN.count(),
  );
}
