import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type StringOpenNode = OpenNode<$.StringOpenNode>;

export function stringOpenNode(reference: TextResourceRange, text: TextData): StringOpenNode {
  return lexicalNode({$: $.StringOpenNode, reference, text});
}
