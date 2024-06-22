import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {$Node} from '../../../syntax/node';
import {TokenNode, tokenNode} from '../token-node';

export type DocumentationDescriptionNode = TokenNode<$Node.DOCUMENTATION_DESCRIPTION>;

export function documentationDescriptionNode(range: TextRange, text: String2): DocumentationDescriptionNode {
  return tokenNode({$: $Node.DOCUMENTATION_DESCRIPTION, range, text});
}
