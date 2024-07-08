import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type BraceOpenNode = OpenNode<$.BraceOpenNode>;

export function braceOpenNode(range: TextRange, text: String2): BraceOpenNode {
  return lexicalNode({$: $.BraceOpenNode, range, text});
}
