import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type OpenNode = TokenNode<$Node.OPEN>;

export function openNode(range: TextRange, text: String2): OpenNode {
  return tokenNode({$: $Node.OPEN, range, text});
}
