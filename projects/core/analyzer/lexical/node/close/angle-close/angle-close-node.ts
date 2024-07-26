import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type AngleCloseNode = CloseNode<$.AngleCloseNode>;

export function angleCloseNode(range: TextRange, text: TextData): AngleCloseNode {
  return lexicalNode({$: $.AngleCloseNode, range, text});
}
