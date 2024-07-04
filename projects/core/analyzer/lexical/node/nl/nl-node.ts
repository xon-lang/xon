import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {HiddenNode, LexicalNode, lexicalNode} from '../lexical-node';

export type NlNode = LexicalNode<$.NlNode> & HiddenNode;

export function nlNode(range: TextRange, text: String2): NlNode {
  return lexicalNode({$: $.NlNode, range, text});
}
