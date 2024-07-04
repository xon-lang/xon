import {$Node} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationDescriptionNode = LexicalNode<$Node.DocumentationDescriptionNode>;

export function documentationDescriptionNode(range: TextRange, text: String2): DocumentationDescriptionNode {
  return lexicalNode({$: $Node.DocumentationDescriptionNode, range, text});
}
