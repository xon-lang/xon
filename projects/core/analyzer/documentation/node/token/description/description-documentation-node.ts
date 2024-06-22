import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {TokenNode, tokenNode} from '../../../../lexical/node/token-node';
import {$Node} from '../../../../syntax/node';

export type DescriptionDocumentationNode = TokenNode<$Node.DESCRIPTION_DOCUMENTATION>;

export function descriptionDocumentationNode(range: TextRange, text: String2): DescriptionDocumentationNode {
  return tokenNode({$: $Node.DESCRIPTION_DOCUMENTATION, range, text});
}
