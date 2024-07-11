import {$} from '../../../../$';
import {Char, String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {ExpressionNode} from '../../../node';
import {CHAR_QUOTE_CLOSE, CHAR_QUOTE_OPEN} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CharNode = LexicalNode<$.CharNode> &
  ExpressionNode & {
    value: Char;
  };

// todo similar as string
export function charNode(range: TextRange, text: String2): CharNode {
  const lastIndex =
    text.length > CHAR_QUOTE_OPEN.length && text.endsWith(CHAR_QUOTE_CLOSE)
      ? -CHAR_QUOTE_CLOSE.length
      : text.length;

  return lexicalNode({$: $.CharNode, range, text, value: text.slice(1, lastIndex)});
}
