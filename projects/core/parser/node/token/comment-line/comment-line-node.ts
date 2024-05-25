import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {HiddenNode, TokenNode, tokenNode} from '../token-node';

export type CommentLineNode = TokenNode<$Node.COMMENT_LINE> & HiddenNode;

export function commentLineNode(range: TextRange, text: String2): CommentLineNode {
  return tokenNode({$: $Node.COMMENT_LINE, range, text});
}
