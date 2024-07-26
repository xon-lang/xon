import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import { TextData } from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type StringOpenNode = OpenNode<$.StringOpenNode>;

export function stringOpenNode(range: TextRange, text: TextData): StringOpenNode {
  return lexicalNode({$: $.StringOpenNode, range, text});
}
