import {String2} from '../../../../lib/core';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentBlockNode extends TokenNode {
  $: $Node.COMMENT_BLOCK;
}

export function commentBlockNode(range: TextRange, text: String2): CommentBlockNode {
  return tokenNode($Node.COMMENT_BLOCK, {range, text});
}
