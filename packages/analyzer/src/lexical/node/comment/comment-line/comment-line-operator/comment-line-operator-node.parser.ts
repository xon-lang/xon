import {$CommentLineOperatorNode, AnalyzerContext, COMMENT_LINE, CommentLineOperatorNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCommentLineOperatorNode(context: AnalyzerContext): CommentLineOperatorNode | Nothing {
  return context.source.takeWhile(
    $CommentLineOperatorNode,
    (x, i) => COMMENT_LINE.at2(i).equals(x),
    COMMENT_LINE.count(),
  );
}
