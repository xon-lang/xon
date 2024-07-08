import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type BraceCloseNode = CloseNode<$.BraceCloseNode>;

export function braceCloseNode(range: TextRange, text: String2): BraceCloseNode {
  return lexicalNode({$: $.BraceCloseNode, range, text});
}
