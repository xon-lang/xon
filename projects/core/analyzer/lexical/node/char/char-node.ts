import {$Node} from '../../../../$';
import {Char, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {ExpressionNode} from '../../../node';
import {CHAR_QUOTE} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CharNode = LexicalNode<$Node.CharNode> &
  ExpressionNode & {
    value: Char;
  };

export function charNode(range: TextRange, text: String2): CharNode {
  const lastIndex = text.length > 1 && text.last() === CHAR_QUOTE ? -1 : text.length;

  return lexicalNode({$: $Node.CharNode, range, text, value: text.slice(1, lastIndex)});
}
