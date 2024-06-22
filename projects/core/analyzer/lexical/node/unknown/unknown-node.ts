import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type UnknownNode = TokenNode<$Node.UNKNOWN>;

export function unknownNode(range: TextRange, text: String2): UnknownNode {
  return tokenNode({$: $Node.UNKNOWN, range, text});
}
