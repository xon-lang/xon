import {$CommentLineOperatorNode, COMMENT_LINE, CommentLineOperatorNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentLineOperatorNode(source: CharStream): CommentLineOperatorNode | Nothing {
  return source.takeWhile(
    $CommentLineOperatorNode,
    (x, i) => COMMENT_LINE.at2(i).equals(x),
    COMMENT_LINE.count(),
  );
}
