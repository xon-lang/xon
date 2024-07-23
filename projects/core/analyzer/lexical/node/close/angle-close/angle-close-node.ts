import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type AngleCloseNode = CloseNode<$.AngleCloseNode>;

export function angleCloseNode(range: TextRange, text: String2): AngleCloseNode {
  return lexicalNode({$: $.AngleCloseNode, range, text});
}
