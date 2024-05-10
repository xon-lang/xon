import {Integer, Nothing, nothing} from '../../../../lib/core';
import {COMMENT_BLOCK} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommentBlockNode, commentBlockNode} from './comment-block-node';

export function commentBlockNodeParse(context: SyntaxContext, index: Integer): CommentBlockNode | Nothing {
  if (context.resource.data.take(COMMENT_BLOCK.length, index) !== COMMENT_BLOCK) {
    return nothing;
  }

  const stopIndex = context.resource.data.indexOf(COMMENT_BLOCK, index + COMMENT_BLOCK.length);
  const endSlice = stopIndex < 0 ? context.resource.data.length : stopIndex + COMMENT_BLOCK.length;

  const text = context.resource.data.slice(index, endSlice);
  const range = context.getRangeWithNL(text.length);

  return commentBlockNode(range, text);
}
