import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type BraceOpenNode = OpenNode<$.BraceOpenNode>;

export function braceOpenNode(reference: TextResourceRange, text: TextData): BraceOpenNode {
  return lexicalNode({$: $.BraceOpenNode, reference, text});
}
