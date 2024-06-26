import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../node';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationDescriptionNode = LexicalNode<$Node.DOCUMENTATION_DESCRIPTION>;

export function documentationDescriptionNode(range: TextRange, text: String2): DocumentationDescriptionNode {
  return lexicalNode({$: $Node.DOCUMENTATION_DESCRIPTION, range, text});
}
