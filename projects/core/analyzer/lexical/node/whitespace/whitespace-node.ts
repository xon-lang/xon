import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type WhitespaceNode = LexicalNode<$.WhitespaceNode>;

export function whitespaceNode(range: TextRange, text: TextData): WhitespaceNode {
  return lexicalNode({$: $.WhitespaceNode, range, text, isHidden: true});
}
