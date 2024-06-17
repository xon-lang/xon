import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {$Node} from '../../../../syntax/node';
import {HiddenNode, TokenNode, tokenNode} from '../../../../syntax/token/token-node';

export type DescriptionDocumentationNode = TokenNode<$Node.DESCRIPTION_DOCUMENTATION> & HiddenNode;

export function descriptionDocumentationNode(range: TextRange, text: String2): DescriptionDocumentationNode {
  return tokenNode({$: $Node.DESCRIPTION_DOCUMENTATION, range, text});
}
