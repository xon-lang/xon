import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type BracketCloseNode = CloseNode<$.BracketCloseNode>;

export function bracketCloseNode(range: TextRange, text: TextData): BracketCloseNode {
  return lexicalNode({$: $.BracketCloseNode, range, text});
}
