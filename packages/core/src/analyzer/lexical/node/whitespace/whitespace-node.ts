import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type WhitespaceNode = LexicalNode<$.WhitespaceNode>;

export function whitespaceNode(reference: TextResourceRange, text: TextData): WhitespaceNode {
  return lexicalNode({$: $.WhitespaceNode, reference, text, isHidden: true});
}
