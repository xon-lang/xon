import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type AngleCloseNode = CloseNode<$.AngleCloseNode>;

export function angleCloseNode(reference: TextResourceRange, text: TextData): AngleCloseNode {
  return lexicalNode({$: $.AngleCloseNode, reference, text});
}
