import {$} from '../../../../$';
import {Integer, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {ExpressionNode} from '../../../node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type IntegerNode = LexicalNode<$.IntegerNode> &
  ExpressionNode & {
    value: Integer;
  };

export function integerNode(range: TextRange, text: String2): IntegerNode {
  return lexicalNode({$: $.IntegerNode, range, text, value: Number(text)});
}
