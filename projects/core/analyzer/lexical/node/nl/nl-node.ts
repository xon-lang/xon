import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {HiddenNode, LexicalNode, tokenNode} from '../lexical-node';

export type NlNode = LexicalNode<$Node.NL> & HiddenNode;

export function nlNode(range: TextRange, text: String2): NlNode {
  return tokenNode({$: $Node.NL, range, text});
}
