import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type BracketOpenNode = OpenNode<$.BracketOpenNode>;

export function bracketOpenNode(reference: TextResourceRange, text: TextData): BracketOpenNode {
  return lexicalNode({$: $.BracketOpenNode, reference, text});
}
