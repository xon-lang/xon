import {$} from '../../../../../$';
import {TextData} from '../../../../../util/data/text-data';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type ParenOpenNode = OpenNode<$.ParenOpenNode>;

export function parenOpenNode(range: TextRange, text: TextData): ParenOpenNode {
  return lexicalNode({$: $.ParenOpenNode, range, text});
}
