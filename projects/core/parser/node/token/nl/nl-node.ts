import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {HiddenNode, TokenNode, tokenNode} from '../token-node';

export type NlNode = TokenNode<$Node.NL> & HiddenNode;

export function nlNode(range: TextRange, text: String2): NlNode {
  return tokenNode({$: $Node.NL, range, text});
}
