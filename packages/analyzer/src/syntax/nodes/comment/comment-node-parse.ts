import {AnalyzerContext, CommentNode, parseCommentBlockNode, parseCommentLineNode} from '#analyzer';
import {Nothing} from '#core';

export function parseCommentNode(context: AnalyzerContext): CommentNode | Nothing {
  return parseCommentBlockNode(context) ?? parseCommentLineNode(context);
}
