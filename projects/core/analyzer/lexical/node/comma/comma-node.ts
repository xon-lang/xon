import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommaNode = LexicalNode<$.CommaNode>;

export function commaNode(range: TextRange, text: TextData): CommaNode {
  return lexicalNode({$: $.CommaNode, range, text});
}
