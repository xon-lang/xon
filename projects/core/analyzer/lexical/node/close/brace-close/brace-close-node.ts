import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type BraceCloseNode = CloseNode<$.BraceCloseNode>;

export function braceCloseNode(reference: TextResourceRange, text: TextData): BraceCloseNode {
  return lexicalNode({$: $.BraceCloseNode, reference, text});
}
