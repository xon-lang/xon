import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {HiddenNode, LexicalNode, tokenNode} from '../lexical-node';

export type CommentLineNode = LexicalNode<$Node.COMMENT_LINE> & HiddenNode;

export function commentLineNode(range: TextRange, text: String2): CommentLineNode {
  return tokenNode({$: $Node.COMMENT_LINE, range, text});
}
