import {$CommentLineContentNode, AnalyzerContext, CommentLineContentNode, CR, CRLF, LF} from '#analyzer';
import {Nothing} from '#core';

export function parseCommentLineContentNode(context: AnalyzerContext): CommentLineContentNode | Nothing {
  return context.source.takeWhile(
    $CommentLineContentNode(),
    (x, i, z) => !x.equals(CR) && !x.equals(LF) && !z.startsWith(CRLF, i),
  );
}
