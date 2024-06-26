import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type OpenNode = LexicalNode<$Node.OPEN>;

export function openNode(range: TextRange, text: String2): OpenNode {
  return lexicalNode({$: $Node.OPEN, range, text});
}
