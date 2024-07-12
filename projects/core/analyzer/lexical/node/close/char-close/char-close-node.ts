import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type CharCloseNode = CloseNode<$.CharCloseNode>;

export function charCloseNode(range: TextRange, text: String2): CharCloseNode {
  return lexicalNode({$: $.CharCloseNode, range, text});
}
