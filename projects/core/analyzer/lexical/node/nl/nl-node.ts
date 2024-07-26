import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type NlNode = LexicalNode<$.NlNode>;

export function nlNode(range: TextRange, text: TextData): NlNode {
  return lexicalNode({$: $.NlNode, range, text, isHidden: true});
}
