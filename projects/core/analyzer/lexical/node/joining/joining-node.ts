import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type JoiningNode = LexicalNode<$.JoiningNode>;

export function joiningNode(range: TextRange, text: String2): JoiningNode {
  return lexicalNode({$: $.JoiningNode, range, text, isHidden: true});
}
