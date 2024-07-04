import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type UnknownNode = LexicalNode<$.UnknownNode>;

export function unknownNode(range: TextRange, text: String2): UnknownNode {
  return lexicalNode({$: $.UnknownNode, range, text});
}
