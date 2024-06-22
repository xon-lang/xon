import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN} from '../../lexical-config';
import {CommentBlockNode, commentBlockNode} from './comment-block-node';

export function commentBlockNodeParse(cursor: TextResourcePosition): CommentBlockNode | Nothing {
  if (!cursor.checkTextAtPosition(COMMENT_BLOCK_OPEN)) {
    return nothing;
  }

  const stopIndex = cursor.resource.data.indexOf(
    COMMENT_BLOCK_CLOSE,
    cursor.position.index + COMMENT_BLOCK_OPEN.length,
  );

  const endSlice = stopIndex < 0 ? cursor.resource.data.length : stopIndex + COMMENT_BLOCK_CLOSE.length;

  const text = cursor.resource.data.slice(cursor.position.index, endSlice);
  // todo should we calculate nl count in place ???
  const range = cursor.getRangeWithNL(text.length);

  return commentBlockNode(range, text);
}
