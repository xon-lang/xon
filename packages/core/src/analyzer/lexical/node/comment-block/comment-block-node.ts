import {$} from '../../../../$';
import {String2} from '../../../../../../lib/src/types';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommentBlockNode = LexicalNode<$.CommentBlockNode> & {
  value: String2;
};

export function commentBlockNode(reference: TextResourceRange, text: TextData): CommentBlockNode {
  let value = '';
  const lastCloseIndex = text.firstIndex(COMMENT_BLOCK_CLOSE);

  if (lastCloseIndex > 0) {
    value = text.slice(COMMENT_BLOCK_OPEN.length, lastCloseIndex).toString();
  } else {
    value = text.slice(COMMENT_BLOCK_OPEN.length).toString();
  }

  return lexicalNode({$: $.CommentBlockNode, reference, text, value, isHidden: true});
}
