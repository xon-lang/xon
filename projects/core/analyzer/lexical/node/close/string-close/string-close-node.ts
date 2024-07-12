import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type StringCloseNode = CloseNode<$.StringCloseNode>;

export function stringCloseNode(range: TextRange, text: String2): StringCloseNode {
  return lexicalNode({$: $.StringCloseNode, range, text});
}
