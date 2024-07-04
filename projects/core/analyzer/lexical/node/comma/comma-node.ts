import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommaNode = LexicalNode<$Node.CommaNode>;

export function commaNode(range: TextRange, text: String2): CommaNode {
  return lexicalNode({$: $Node.CommaNode, range, text});
}
