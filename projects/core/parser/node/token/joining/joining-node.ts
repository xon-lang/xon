import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export type JoiningNode = TokenNode<$Node.JOINING>;

export function joiningNode(range: TextRange, text: String2): JoiningNode {
  return tokenNode({$: $Node.JOINING, range, text});
}
