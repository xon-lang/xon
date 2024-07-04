import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {HiddenNode, LexicalNode, lexicalNode} from '../lexical-node';

export type CommentLineNode = LexicalNode<$Node.CommentLineNode> & HiddenNode;

export function commentLineNode(range: TextRange, text: String2): CommentLineNode {
  return lexicalNode({$: $Node.CommentLineNode, range, text});
}
