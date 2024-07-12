import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {lexicalNode, LexicalNode} from '../lexical-node';

export type IntegerContentNode = LexicalNode<$.IntegerContentNode>;

export function integerContentNode(range: TextRange, text: String2): IntegerContentNode {
  return lexicalNode({$: $.IntegerContentNode, range, text});
}
