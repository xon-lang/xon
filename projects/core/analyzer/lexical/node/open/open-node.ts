import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type OpenNode = LexicalNode<$Node.OpenNode>;

export function openNode(range: TextRange, text: String2): OpenNode {
  return lexicalNode({$: $Node.OpenNode, range, text});
}
