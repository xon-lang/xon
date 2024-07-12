import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type CharOpenNode = OpenNode<$.CharOpenNode>;

export function charOpenNode(range: TextRange, text: String2): CharOpenNode {
  return lexicalNode({$: $.CharOpenNode, range, text});
}
