import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {HiddenNode, LexicalNode, lexicalNode} from '../lexical-node';

export type WhitespaceNode = LexicalNode<$Node.WHITESPACE> & HiddenNode;

export function whitespaceNode(range: TextRange, text: String2): WhitespaceNode {
  return lexicalNode({$: $Node.WHITESPACE, range, text});
}
