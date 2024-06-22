import {Integer, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node, ExpressionNode} from '../../../syntax/node';
import {LexicalNode, tokenNode} from '../lexical-node';

export type IntegerNode = LexicalNode<$Node.INTEGER> &
  ExpressionNode & {
    value: Integer;
  };

export function integerNode(range: TextRange, text: String2): IntegerNode {
  return tokenNode({$: $Node.INTEGER, range, text, value: Number(text)});
}
