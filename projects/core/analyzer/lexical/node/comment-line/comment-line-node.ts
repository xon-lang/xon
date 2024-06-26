import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../node';
import {HiddenNode, LexicalNode, lexicalNode} from '../lexical-node';

export type CommentLineNode = LexicalNode<$Node.COMMENT_LINE> & HiddenNode;

export function commentLineNode(range: TextRange, text: String2): CommentLineNode {
  return lexicalNode({$: $Node.COMMENT_LINE, range, text});
}
