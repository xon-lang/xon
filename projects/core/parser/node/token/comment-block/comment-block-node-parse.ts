import {Nothing, nothing} from '../../../../lib/core';
import {COMMENT_BLOCK} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommentBlockNode, commentBlockNode} from './comment-block-node';

export function commentBlockNodeParse(context: SyntaxContext): CommentBlockNode | Nothing {
  const {resource, position} = context;

  if (resource.data.take(COMMENT_BLOCK.length, position.index) !== COMMENT_BLOCK) {
    return nothing;
  }

  const stopIndex = resource.data.indexOf(COMMENT_BLOCK, position.index + COMMENT_BLOCK.length);
  const endSlice = stopIndex < 0 ? resource.data.length : stopIndex + COMMENT_BLOCK.length;

  const text = resource.data.slice(position.index, endSlice);
  const range = context.getRange(text.length, true);

  return commentBlockNode(range, text);
}
