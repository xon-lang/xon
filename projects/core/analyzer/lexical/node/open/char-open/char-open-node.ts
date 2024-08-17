import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import { TextResourceRange } from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type CharOpenNode = OpenNode<$.CharOpenNode>;

export function charOpenNode(reference: TextResourceRange, text: TextData): CharOpenNode {
  return lexicalNode({$: $.CharOpenNode, reference, text});
}
