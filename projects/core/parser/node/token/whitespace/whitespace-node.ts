import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {HiddenNode, TokenNode, tokenNode} from '../token-node';

export type WhitespaceNode = TokenNode<$Node.WHITESPACE> & HiddenNode;

export function whitespaceNode(range: TextRange, text: String2): WhitespaceNode {
  return tokenNode({$: $Node.WHITESPACE, range, text});
}
