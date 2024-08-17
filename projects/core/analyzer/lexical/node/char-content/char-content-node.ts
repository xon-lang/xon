import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type CharContentNode = LexicalNode<$.CharContentNode>;

export function charContentNode(reference: TextResourceRange, text: TextData): CharContentNode {
  return lexicalNode({$: $.CharContentNode, reference, text});
}
