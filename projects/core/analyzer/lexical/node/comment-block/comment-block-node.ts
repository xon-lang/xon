import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommentBlockNode = LexicalNode<$.CommentBlockNode> & {
  value: String2;
};

export function commentBlockNode(range: TextRange, text: String2): CommentBlockNode {
  let value = '';
  const lastCloseIndex = text.lastIndexOf(COMMENT_BLOCK_CLOSE);

  if (lastCloseIndex > 0) {
    value = text.slice(COMMENT_BLOCK_OPEN.length, lastCloseIndex);
  } else {
    value = text.slice(COMMENT_BLOCK_OPEN.length);
  }

  return lexicalNode({$: $.CommentBlockNode, range, text, value, isHidden: true});
}
