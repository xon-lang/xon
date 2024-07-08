import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type BracketCloseNode = CloseNode<$.BracketCloseNode>;

export function bracketCloseNode(range: TextRange, text: String2): BracketCloseNode {
  return lexicalNode({$: $.BracketCloseNode, range, text});
}
