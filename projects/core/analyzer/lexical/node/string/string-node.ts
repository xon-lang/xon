import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {ExpressionNode} from '../../../node';
import {STRING_QUOTE_CLOSE, STRING_QUOTE_OPEN} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type StringNode = LexicalNode<$.StringNode> &
  ExpressionNode & {
    value: String2;
  };

// todo similar as char
export function stringNode(range: TextRange, text: String2): StringNode {
  const lastIndex =
    text.length > STRING_QUOTE_OPEN.length && text.endsWith(STRING_QUOTE_CLOSE)
      ? -STRING_QUOTE_CLOSE.length
      : text.length;

  return lexicalNode({$: $.StringNode, range, text, value: text.slice(1, lastIndex)});
}
