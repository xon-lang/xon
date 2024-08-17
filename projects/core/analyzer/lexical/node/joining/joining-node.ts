import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type JoiningNode = LexicalNode<$.JoiningNode>;

export function joiningNode(reference: TextResourceRange, text: TextData): JoiningNode {
  return lexicalNode({$: $.JoiningNode, reference, text, isHidden: true});
}
