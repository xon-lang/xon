import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {HiddenNode, LexicalNode, lexicalNode} from '../lexical-node';

export type WhitespaceNode = LexicalNode<$Node.WhitespaceNode> & HiddenNode;

export function whitespaceNode(range: TextRange, text: String2): WhitespaceNode {
  return lexicalNode({$: $Node.WhitespaceNode, range, text});
}
