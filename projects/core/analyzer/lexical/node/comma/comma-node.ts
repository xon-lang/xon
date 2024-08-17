import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommaNode = LexicalNode<$.CommaNode>;

export function commaNode(reference: TextResourceRange, text: TextData): CommaNode {
  return lexicalNode({$: $.CommaNode, reference, text});
}
