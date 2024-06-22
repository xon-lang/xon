import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {TokenNode, tokenNode} from '../../../../lexical/node/token-node';
import {$Node} from '../../../../syntax/node';

export type DocumentationDescriptionNode = TokenNode<$Node.DOCUMENTATION_DESCRIPTION>;

export function documentationDescriptionNode(range: TextRange, text: String2): DocumentationDescriptionNode {
  return tokenNode({$: $Node.DOCUMENTATION_DESCRIPTION, range, text});
}
