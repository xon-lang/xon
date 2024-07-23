import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type AngleOpenNode = OpenNode<$.AngleOpenNode>;

export function angleOpenNode(range: TextRange, text: String2): AngleOpenNode {
  return lexicalNode({$: $.AngleOpenNode, range, text});
}
