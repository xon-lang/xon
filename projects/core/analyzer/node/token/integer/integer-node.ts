import {Integer, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node, ExpressionNode} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export type IntegerNode = TokenNode<$Node.INTEGER> &
  ExpressionNode & {
    value: Integer;
  };

export function integerNode(range: TextRange, text: String2): IntegerNode {
  return tokenNode({$: $Node.INTEGER, range, text, value: Number(text)});
}
