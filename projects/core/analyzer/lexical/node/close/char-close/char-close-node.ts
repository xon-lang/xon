import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type CharCloseNode = CloseNode<$.CharCloseNode>;

export function charCloseNode(reference: TextResourceRange, text: TextData): CharCloseNode {
  return lexicalNode({$: $.CharCloseNode, reference, text});
}
