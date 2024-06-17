import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {CommentBlockNode, commentBlockNode} from './comment-block-node';

export function commentBlockNodeParse(context: SyntaxContext, index: Integer): CommentBlockNode | Nothing {
  if (!context.checkLexemeAtIndex(COMMENT_BLOCK_OPEN, index)) {
    return nothing;
  }

  const stopIndex = context.resource.data.indexOf(COMMENT_BLOCK_CLOSE, index + COMMENT_BLOCK_CLOSE.length);
  const endSlice = stopIndex < 0 ? context.resource.data.length : stopIndex + COMMENT_BLOCK_CLOSE.length;

  const text = context.resource.data.slice(index, endSlice);
  const range = context.getRangeWithNL(text.length);

  return commentBlockNode(range, text);
}
