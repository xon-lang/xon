import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CommentLineNode extends TokenNode {
  $: $Node.COMMENT_LINE;
}

export function commentLineNode(range: TextRange, text: String2): CommentLineNode {
  return tokenNode({$: $Node.COMMENT_LINE, range, text});
}
