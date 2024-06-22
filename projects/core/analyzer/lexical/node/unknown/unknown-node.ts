import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {LexicalNode, tokenNode} from '../lexical-node';

export type UnknownNode = LexicalNode<$Node.UNKNOWN>;

export function unknownNode(range: TextRange, text: String2): UnknownNode {
  return tokenNode({$: $Node.UNKNOWN, range, text});
}
