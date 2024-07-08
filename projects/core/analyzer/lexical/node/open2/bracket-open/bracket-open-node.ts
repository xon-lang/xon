import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type BracketOpenNode = OpenNode<$.BracketOpenNode>;

export function bracketOpenNode(range: TextRange, text: String2): BracketOpenNode {
  return lexicalNode({$: $.BracketOpenNode, range, text});
}
