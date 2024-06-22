import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {STRING_QUOTE} from '../../lexical-config';
import {$Node, ExpressionNode} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type StringNode = TokenNode<$Node.STRING> &
  ExpressionNode & {
    value: String2;
  };

export function stringNode(range: TextRange, text: String2): StringNode {
  const lastIndex = text.length > 1 && text.last() === STRING_QUOTE ? -1 : text.length;
  const value = text.slice(1, lastIndex);

  return tokenNode({$: $Node.STRING, range, text, value});
}
