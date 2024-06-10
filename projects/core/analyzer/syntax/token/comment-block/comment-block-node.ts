import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {COMMENT_BLOCK} from '../../../lexical/lexical-config';
import {$Node} from '../../node';
import {HiddenNode, TokenNode, tokenNode} from '../token-node';

// todo add separate parser for documentation (e.g. @param, @return, ...)
export type CommentBlockNode = TokenNode<$Node.COMMENT_BLOCK> &
  HiddenNode & {
    value: String2;
  };

export function commentBlockNode(range: TextRange, text: String2): CommentBlockNode {
  let value = '';
  const lastCloseIndex = text.lastIndexOf(COMMENT_BLOCK);

  if (lastCloseIndex > 0) {
    value = text.slice(COMMENT_BLOCK.length, lastCloseIndex);
  } else {
    value = text.slice(COMMENT_BLOCK.length);
  }

  return tokenNode({$: $Node.COMMENT_BLOCK, range, text, value});
}
