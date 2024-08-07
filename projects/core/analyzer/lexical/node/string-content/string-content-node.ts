import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type StringContentNode = LexicalNode<$.StringContentNode>;

export function stringContentNode(range: TextRange, text: String2): StringContentNode {
  return lexicalNode({$: $.StringContentNode, range, text});
}
