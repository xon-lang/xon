import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type NlNode = LexicalNode<$.NlNode>;

export function nlNode(reference: TextResourceRange, text: TextData): NlNode {
  return lexicalNode({$: $.NlNode, reference, text, isHidden: true});
}
