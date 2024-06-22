import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {HiddenNode, LexicalNode, tokenNode} from '../lexical-node';

export type JoiningNode = LexicalNode<$Node.JOINING> & HiddenNode;

export function joiningNode(range: TextRange, text: String2): JoiningNode {
  return tokenNode({$: $Node.JOINING, range, text});
}
