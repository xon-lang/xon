import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type AngleOpenNode = OpenNode<$.AngleOpenNode>;

export function angleOpenNode(range: TextRange, text: TextData): AngleOpenNode {
  return lexicalNode({$: $.AngleOpenNode, range, text});
}
