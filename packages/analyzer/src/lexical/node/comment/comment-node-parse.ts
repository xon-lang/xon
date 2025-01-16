import {CommentNode, parseCommentBlockNode, parseCommentLineNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseCommentNode(source: CharStream): CommentNode | Nothing {
  return parseCommentBlockNode(source) ?? parseCommentLineNode(source);
}
