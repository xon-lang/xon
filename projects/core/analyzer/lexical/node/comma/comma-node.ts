import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type CommaNode = TokenNode<$Node.COMMA>;

export function commaNode(range: TextRange, text: String2): CommaNode {
  return tokenNode({$: $Node.COMMA, range, text});
}
