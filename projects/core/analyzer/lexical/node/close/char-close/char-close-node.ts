import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {CloseNode} from '../close-node';

export type CharCloseNode = CloseNode<$.CharCloseNode>;

export function charCloseNode(range: TextRange, text: TextData): CharCloseNode {
  return lexicalNode({$: $.CharCloseNode, range, text});
}
