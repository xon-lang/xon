import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type StringContentNode = LexicalNode<$.StringContentNode>;

export function stringContentNode(range: TextRange, text: TextData): StringContentNode {
  return lexicalNode({$: $.StringContentNode, range, text});
}
