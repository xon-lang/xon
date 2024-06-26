import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../node';
import {HiddenNode, LexicalNode, lexicalNode} from '../lexical-node';

export type JoiningNode = LexicalNode<$Node.JOINING> & HiddenNode;

export function joiningNode(range: TextRange, text: String2): JoiningNode {
  return lexicalNode({$: $Node.JOINING, range, text});
}
