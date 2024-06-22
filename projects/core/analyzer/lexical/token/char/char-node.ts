import {Char, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {CHAR_QUOTE} from '../../lexical-config';
import {$Node, ExpressionNode} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type CharNode = TokenNode<$Node.CHAR> &
  ExpressionNode & {
    value: Char;
  };

export function charNode(range: TextRange, text: String2): CharNode {
  const lastIndex = text.length > 1 && text.last() === CHAR_QUOTE ? -1 : text.length;

  return tokenNode({$: $Node.CHAR, range, text, value: text.slice(1, lastIndex)});
}
