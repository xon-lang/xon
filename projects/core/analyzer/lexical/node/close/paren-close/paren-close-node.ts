import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type ParenCloseNode = CloseNode<$.ParenCloseNode>;

export function parenCloseNode(range: TextRange, text: TextData): ParenCloseNode {
  return lexicalNode({$: $.ParenCloseNode, range, text});
}
