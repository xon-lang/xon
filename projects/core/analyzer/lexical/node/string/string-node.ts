import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node, ExpressionNode} from '../../../syntax/node';
import {STRING_QUOTE} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type StringNode = LexicalNode<$Node.STRING> &
  ExpressionNode & {
    value: String2;
  };

export function stringNode(range: TextRange, text: String2): StringNode {
  const lastIndex = text.length > 1 && text.last() === STRING_QUOTE ? -1 : text.length;
  const value = text.slice(1, lastIndex);

  return lexicalNode({$: $Node.STRING, range, text, value});
}
