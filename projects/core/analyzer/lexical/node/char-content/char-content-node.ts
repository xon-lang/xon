import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type CharContentNode = LexicalNode<$.CharContentNode>;

export function charContentNode(range: TextRange, text: String2): CharContentNode {
  return lexicalNode({$: $.CharContentNode, range, text});
}
