import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommaNode = LexicalNode<$.CommaNode>;

export function commaNode(range: TextRange, text: String2): CommaNode {
  return lexicalNode({$: $.CommaNode, range, text});
}
