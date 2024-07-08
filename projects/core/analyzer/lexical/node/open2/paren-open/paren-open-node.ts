import {$} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {lexicalNode} from '../../lexical-node';
import {OpenNode} from '../open-node';

export type ParenOpenNode = OpenNode<$.ParenOpenNode>;

export function parenOpenNode(range: TextRange, text: String2): ParenOpenNode {
  return lexicalNode({$: $.ParenOpenNode, range, text});
}
