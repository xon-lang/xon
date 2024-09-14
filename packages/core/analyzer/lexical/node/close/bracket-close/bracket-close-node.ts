import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type BracketCloseNode = CloseNode<$.BracketCloseNode>;

export function bracketCloseNode(reference: TextResourceRange, text: TextData): BracketCloseNode {
  return lexicalNode({$: $.BracketCloseNode, reference, text});
}
