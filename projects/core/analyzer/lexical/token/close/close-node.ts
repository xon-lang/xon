import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type CloseNode = TokenNode<$Node.CLOSE>;

export function closeNode(range: TextRange, text: String2): CloseNode {
  return tokenNode({$: $Node.CLOSE, range, text});
}
