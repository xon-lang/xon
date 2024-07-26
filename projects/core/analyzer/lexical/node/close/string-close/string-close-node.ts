import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type StringCloseNode = CloseNode<$.StringCloseNode>;

export function stringCloseNode(range: TextRange, text: TextData): StringCloseNode {
  return lexicalNode({$: $.StringCloseNode, range, text});
}
