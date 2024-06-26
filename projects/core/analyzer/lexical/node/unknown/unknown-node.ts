import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type UnknownNode = LexicalNode<$Node.UNKNOWN>;

export function unknownNode(range: TextRange, text: String2): UnknownNode {
  return lexicalNode({$: $Node.UNKNOWN, range, text});
}
