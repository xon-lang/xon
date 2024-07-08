import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type ParenCloseNode = CloseNode<$.ParenCloseNode>;

export function parenCloseNode(range: TextRange, text: String2): ParenCloseNode {
  return lexicalNode({$: $.ParenCloseNode, range, text});
}
