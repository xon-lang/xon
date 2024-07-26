import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type CharOpenNode = OpenNode<$.CharOpenNode>;

export function charOpenNode(range: TextRange, text: TextData): CharOpenNode {
  return lexicalNode({$: $.CharOpenNode, range, text});
}
