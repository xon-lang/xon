import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type StringCloseNode = CloseNode<$.StringCloseNode>;

export function stringCloseNode(reference: TextResourceRange, text: TextData): StringCloseNode {
  return lexicalNode({$: $.StringCloseNode, reference, text});
}
