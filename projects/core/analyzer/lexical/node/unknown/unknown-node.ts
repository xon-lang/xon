import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type UnknownNode = LexicalNode<$Node.UnknownNode>;

export function unknownNode(range: TextRange, text: String2): UnknownNode {
  return lexicalNode({$: $Node.UnknownNode, range, text});
}
