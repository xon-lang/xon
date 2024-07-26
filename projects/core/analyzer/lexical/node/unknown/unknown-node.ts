import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type UnknownNode = LexicalNode<$.UnknownNode>;

export function unknownNode(range: TextRange, text: TextData): UnknownNode {
  return lexicalNode({$: $.UnknownNode, range, text});
}
