import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {LexicalNode, tokenNode} from '../lexical-node';

export type DocumentationDescriptionNode = LexicalNode<$Node.DOCUMENTATION_DESCRIPTION>;

export function documentationDescriptionNode(range: TextRange, text: String2): DocumentationDescriptionNode {
  return tokenNode({$: $Node.DOCUMENTATION_DESCRIPTION, range, text});
}
