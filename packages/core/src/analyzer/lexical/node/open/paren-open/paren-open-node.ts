import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type ParenOpenNode = OpenNode<$.ParenOpenNode>;

export function parenOpenNode(reference: TextResourceRange, text: TextData): ParenOpenNode {
  return lexicalNode({$: $.ParenOpenNode, reference, text});
}
