import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type IntegerContentNode = LexicalNode<$.IntegerContentNode>;

export function integerContentNode(range: TextRange, text: TextData): IntegerContentNode {
  return lexicalNode({$: $.IntegerContentNode, range, text});
}
