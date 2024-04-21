import {String2} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentLineNode extends TokenNode {
  $: $Node.COMMENT_LINE;
}

export function commentLineNode(range: TextResourceRange, text: String2): CommentLineNode {
  return tokenNode($Node.COMMENT_LINE, {range, text});
}
