import {
  AnalyzerContext,
  CommentLineNode,
  newCommentLineNode,
  parseCommentLineContentNode,
  parseCommentLineOperatorNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseCommentLineNode(context: AnalyzerContext): CommentLineNode | Nothing {
  const operatorNode = parseCommentLineOperatorNode(context);

  if (!operatorNode) {
    return;
  }

  const contentNode = parseCommentLineContentNode(context);

  return newCommentLineNode(operatorNode, contentNode);
}
