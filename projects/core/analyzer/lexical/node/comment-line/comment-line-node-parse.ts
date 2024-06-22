import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {COMMENT_LINE, NL} from '../../lexical-analyzer-config';
import {CommentLineNode, commentLineNode} from './comment-line-node';

export function commentLineNodeParse(cursor: TextResourcePosition): CommentLineNode | Nothing {
  if (!cursor.checkTextAtIndex(COMMENT_LINE)) {
    return nothing;
  }

  const text = cursor.resource.data.takeWhile((x) => x !== NL, cursor.position.index);
  const range = cursor.getRange(text.length);

  return commentLineNode(range, text);
}
