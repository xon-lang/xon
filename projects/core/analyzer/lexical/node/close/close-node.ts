import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CloseNode = LexicalNode<$.CloseNode>;

export function closeNode(range: TextRange, text: String2): CloseNode {
  return lexicalNode({$: $.CloseNode, range, text});
}
