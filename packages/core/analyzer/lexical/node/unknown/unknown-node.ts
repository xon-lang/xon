import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type UnknownNode = LexicalNode<$.UnknownNode>;

export function unknownNode(reference: TextResourceRange, text: TextData): UnknownNode {
  return lexicalNode({$: $.UnknownNode, reference, text});
}
