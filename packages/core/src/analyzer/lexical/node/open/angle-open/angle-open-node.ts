import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type AngleOpenNode = OpenNode<$.AngleOpenNode>;

export function angleOpenNode(reference: TextResourceRange, text: TextData): AngleOpenNode {
  return lexicalNode({$: $.AngleOpenNode, reference, text});
}
