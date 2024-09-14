import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type ParenCloseNode = CloseNode<$.ParenCloseNode>;

export function parenCloseNode(reference: TextResourceRange, text: TextData): ParenCloseNode {
  return lexicalNode({$: $.ParenCloseNode, reference, text});
}
