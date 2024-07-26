import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type BraceOpenNode = OpenNode<$.BraceOpenNode>;

export function braceOpenNode(range: TextRange, text: TextData): BraceOpenNode {
  return lexicalNode({$: $.BraceOpenNode, range, text});
}
