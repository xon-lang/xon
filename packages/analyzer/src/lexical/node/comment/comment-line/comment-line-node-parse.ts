import {
  CommentLineNode,
  newCommentLineNode,
  parseCommentLineContentNode,
  parseCommentLineOperatorNode,
} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentLineNode(source: CharStream): CommentLineNode | Nothing {
  const operatorNode = parseCommentLineOperatorNode(source);

  if (!operatorNode) {
    return;
  }

  const contentNode = parseCommentLineContentNode(source);

  return newCommentLineNode(operatorNode, contentNode);
}
