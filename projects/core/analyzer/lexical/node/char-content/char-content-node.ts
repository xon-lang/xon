import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type CharContentNode = LexicalNode<$.CharContentNode>;

export function charContentNode(range: TextRange, text: TextData): CharContentNode {
  return lexicalNode({$: $.CharContentNode, range, text});
}
