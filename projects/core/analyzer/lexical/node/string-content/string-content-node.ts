import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type StringContentNode = LexicalNode<$.StringContentNode>;

export function stringContentNode(reference: TextResourceRange, text: TextData): StringContentNode {
  return lexicalNode({$: $.StringContentNode, reference, text});
}
