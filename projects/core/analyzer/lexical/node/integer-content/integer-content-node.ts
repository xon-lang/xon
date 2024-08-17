import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type IntegerContentNode = LexicalNode<$.IntegerContentNode>;

export function integerContentNode(reference: TextResourceRange, text: TextData): IntegerContentNode {
  return lexicalNode({$: $.IntegerContentNode, reference, text});
}
