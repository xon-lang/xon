import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type BracketOpenNode = OpenNode<$.BracketOpenNode>;

export function bracketOpenNode(range: TextRange, text: TextData): BracketOpenNode {
  return lexicalNode({$: $.BracketOpenNode, range, text});
}
