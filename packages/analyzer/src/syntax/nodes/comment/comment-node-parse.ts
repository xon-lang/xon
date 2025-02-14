import {AnalyzerContext, CommentNode, parseCommentBlockNode, parseCommentLineNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCommentNode(context: AnalyzerContext): CommentNode | Nothing {
  return parseCommentBlockNode(context) ?? parseCommentLineNode(context);
}
