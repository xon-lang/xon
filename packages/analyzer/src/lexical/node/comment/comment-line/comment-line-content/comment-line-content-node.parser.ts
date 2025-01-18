import {$CommentLineContentNode, AnalyzerContext, CommentLineContentNode, NL} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentLineContentNode(context: AnalyzerContext): CommentLineContentNode | Nothing {
  return context.source.takeWhile($CommentLineContentNode, (_x, i, z) => !z.startsWith(NL, i));
}
