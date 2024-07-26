import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type BraceCloseNode = CloseNode<$.BraceCloseNode>;

export function braceCloseNode(range: TextRange, text: TextData): BraceCloseNode {
  return lexicalNode({$: $.BraceCloseNode, range, text});
}
