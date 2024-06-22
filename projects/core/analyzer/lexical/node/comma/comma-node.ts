import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommaNode = LexicalNode<$Node.COMMA>;

export function commaNode(range: TextRange, text: String2): CommaNode {
  return lexicalNode({$: $Node.COMMA, range, text});
}
