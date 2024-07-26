import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type JoiningNode = LexicalNode<$.JoiningNode>;

export function joiningNode(range: TextRange, text: TextData): JoiningNode {
  return lexicalNode({$: $.JoiningNode, range, text, isHidden: true});
}
